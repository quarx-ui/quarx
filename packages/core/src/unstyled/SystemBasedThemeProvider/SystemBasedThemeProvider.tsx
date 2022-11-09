import { createTheme, CreateThemeArg, PaletteType, Theme } from '@core';
import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useSystemTheme } from '@core/utils/hooks/useSystemTheme';
import { ThemeProviderProps } from '@emotion/react/types/theming';

export interface SystemBasedThemeProviderProps extends Partial<ThemeProviderProps> {
    themeType?: PaletteType,
    disableCheckSystemTheme?: boolean,
    createThemeArgs?: CreateThemeArg,
    theme?: Theme,
}

export const SystemBasedThemeProvider: FC<SystemBasedThemeProviderProps> = ({
    themeType: initialThemeType, disableCheckSystemTheme, createThemeArgs, ...props }) => {
    const systemThemeType = useSystemTheme(initialThemeType);
    const theme = createTheme({
        ...createThemeArgs,
        palette: {
            ...createThemeArgs?.palette,
            type: (disableCheckSystemTheme ? initialThemeType : systemThemeType)
                || initialThemeType || createThemeArgs?.palette?.type || 'light',
        },
    });
    return <ThemeProvider theme={theme} {...props} />;
};
