import { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider, useTheme } from '@emotion/react';
import { defaultTheme, Theme, THEME_IDENTIFIER, themeIsQx } from '@core';
import { ThemeProviderProps } from './types';

export const ThemeProvider: FC<ThemeProviderProps> = ({
    theme,
    isolate,
    ...restProps
}) => {
    const contextTheme = (useTheme() ?? defaultTheme) as Theme;

    const contextThemeIsOurs = themeIsQx(contextTheme);
    const externalThemeIsOurs = themeIsQx(theme as Theme);

    const contextThemeIsEmpty = Object.keys(contextTheme).length === 0;

    const needIsolate = externalThemeIsOurs && !contextThemeIsEmpty && !contextThemeIsOurs;

    const resolvedTheme = (isolate ?? needIsolate)
        ? { [THEME_IDENTIFIER]: theme }
        : theme;

    return (
        <EmotionThemeProvider theme={resolvedTheme} {...restProps} />
    );
};
