import { deepmerge } from '../utils';
import { defaultTheme as noopTheme, Theme as DefaultTheme } from '../theme';
import { Styles, StylesCreator } from './types';

export function getStylesCreator<
    Theme = DefaultTheme,
    Props extends Record<string, never> = Record<string, never>,
    ClassKey extends string = string
>(stylesOrCreator: Styles<Theme, Props, ClassKey>): StylesCreator<any, any> {
    const themingEnabled = typeof stylesOrCreator === 'function';

    if (process.env.NODE_ENV !== 'production') {
        if (typeof stylesOrCreator !== 'object' && !themingEnabled) {
            console.error(
                [
                    'QuarX-UI: The `styles` argument provided is invalid.',
                    'You need to provide a function generating the styles or a styles object.',
                ].join('\n'),
            );
        }
    }

    return {
        themingEnabled,
        create: (theme, name) => {
            let styles;
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
            } catch (err) {
                if (process.env.NODE_ENV !== 'production') {
                    if (themingEnabled && theme === noopTheme) {
                        // TODO: prepend error message/name instead
                        console.error(
                            [
                                'QuarX-UI: The `styles` argument provided is invalid.',
                                'You are providing a function without a theme in the context.',
                                'One of the parent elements needs to use a ThemeProvider.',
                            ].join('\n'),
                        );
                    }
                }
                throw err;
            }

            if (!name || !theme.overrides || !theme.overrides[name]) {
                return styles;
            }

            const overrides = theme.overrides[name];
            const stylesWithOverrides = { ...styles };

            Object.keys(overrides).forEach((key) => {
                if (process.env.NODE_ENV !== 'production') {
                    if (!stylesWithOverrides[key as ClassKey]) {
                        console.warn(
                            [
                                'QuarX-UI: You are trying to override a style that does not exist.',
                                `Fix the \`${key}\` key of \`theme.overrides.${name}\`.`,
                            ].join('\n'),
                        );
                    }
                }

                stylesWithOverrides[key as ClassKey] = deepmerge(stylesWithOverrides[key as ClassKey], overrides[key]);
            });

            return stylesWithOverrides;
        },
        options: {},
    };
}
