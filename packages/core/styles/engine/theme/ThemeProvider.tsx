import React from 'react';
import { Theme, ThemeProviderProps, ThemeRewriter } from './types';
import { ThemeContext } from './ThemeContext';
import { useTheme } from './hooks';
import { defaultTheme } from './defaultTheme';

const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export const nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

// To support composition of theme.
function mergeOuterLocalTheme(outerTheme: Theme, localTheme: Theme | ThemeRewriter) {
    if (typeof localTheme === 'function') {
        const mergedTheme = localTheme(outerTheme);

        if (process.env.NODE_ENV !== 'production') {
            if (!mergedTheme) {
                console.error(
                    [
                        'ThemeProvider: You should return an object from your theme function, i.e.',
                        '<ThemeProvider theme={() => ({})} />',
                    ].join('\n'),
                );
            }
        }

        return mergedTheme;
    }

    return { ...outerTheme, ...localTheme };
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
export function ThemeProvider(props: ThemeProviderProps) {
    const { children, theme: localTheme } = props;
    const outerTheme = useTheme();

    if (process.env.NODE_ENV !== 'production') {
        if (outerTheme === null && typeof localTheme === 'function') {
            console.error(
                [
                    'QuarX-UI: You are providing a theme function prop to the ThemeProvider component:',
                    '<ThemeProvider theme={outerTheme => outerTheme} />',
                    '',
                    'However, no outer theme is present.',
                    'Make sure a theme is already injected higher in the React tree '
                    + 'or provide a theme object.',
                ].join('\n'),
            );
        }
    }

    const theme = React.useMemo(() => {
        let output: Theme;
        if (typeof localTheme === 'function') {
            output = mergeOuterLocalTheme(outerTheme ?? defaultTheme, localTheme);
        } else {
            output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
        }

        if (output != null) {
            // eslint-disable-next-line
            // @ts-ignore
            output[nested] = outerTheme !== null;
        }

        return output;
    }, [localTheme, outerTheme]);

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
