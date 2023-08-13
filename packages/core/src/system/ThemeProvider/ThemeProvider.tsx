import { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider, ThemeProviderProps, useTheme } from '@emotion/react';
import { defaultTheme, Theme, THEME_IDENTIFIER, themeIsQx } from '@core';

export const ThemeProvider: FC<ThemeProviderProps> = ({
    theme = {},
    ...restProps
}) => {
    const contextTheme = (useTheme() ?? defaultTheme) as Theme;

    const contextThemeIsOurs = themeIsQx(contextTheme);
    const externalThemeIsOurs = themeIsQx(theme as Theme);

    const resolvedTheme = contextThemeIsOurs || !externalThemeIsOurs
        ? theme
        : { [THEME_IDENTIFIER]: theme };

    return (
        <EmotionThemeProvider theme={resolvedTheme} {...restProps} />
    );
};
