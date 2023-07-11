import { createTheme } from '@core';
import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useSystemTheme } from '@core/utils/hooks/useSystemTheme';
import { SystemBasedThemeProviderProps } from './types';

export const SystemBasedThemeProvider: FC<SystemBasedThemeProviderProps> = (initialProps) => {
    const {
        themeType: initialThemeType, disableCheckSystemTheme = false, createThemeArgs, ...props } = initialProps;
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
