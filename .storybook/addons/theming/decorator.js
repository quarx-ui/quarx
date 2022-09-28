import { ThemingAddonAPI, ThemingAddonAPI as ThemeAddonAPI } from './store';
import React, { useMemo } from 'react';
import { createTheme } from '@core';
import { ThemeProvider } from '@emotion/react';

export const ThemeDecorator = (Story) => {
    const themeType = ThemeAddonAPI.getLocallyStoredType();

    const theme = useMemo(() => {
        const quarXTheme = createTheme({
            palette: { type: themeType },
        });
        ThemingAddonAPI.setWindowTheme(quarXTheme);
        return quarXTheme;
    }, [themeType]);

    const color = theme.palette.text.main;

    return (
        <ThemeProvider theme={theme}>
            <div style={{ color }}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
