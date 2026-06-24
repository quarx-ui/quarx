import React, { useEffect, useMemo } from 'react';
import type { Decorator } from '@storybook/react-vite';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core';
import { ThemingAddonAPI, ThemingAddonAPI as ThemeAddonAPI } from './store';

const applyCanvasColors = (element: Element | null, background: string, color: string) => {
    if (!(element instanceof HTMLElement)) {
        return undefined;
    }

    const previousBackground = element.style.background;
    const previousColor = element.style.color;

    element.style.background = background;
    element.style.color = color;

    return () => {
        element.style.background = previousBackground;
        element.style.color = previousColor;
    };
};

export const ThemeDecorator: Decorator = (Story) => {
    const themeType = ThemeAddonAPI.getLocallyStoredType();

    const theme = useMemo(() => {
        const quarXTheme = createTheme({
            palette: { type: themeType },
        });
        ThemingAddonAPI.setWindowTheme(quarXTheme);
        return quarXTheme;
    }, [themeType]);

    const color = theme.palette.text.main;
    const background = theme.palette.background.main;

    useEffect(() => {
        const cleanups = [
            applyCanvasColors(document.documentElement, background, color),
            applyCanvasColors(document.body, background, color),
            applyCanvasColors(document.getElementById('storybook-root'), background, color),
            applyCanvasColors(document.querySelector('.sb-show-main'), background, color),
        ];

        return () => {
            cleanups.forEach((cleanup) => cleanup?.());
        };
    }, [background, color]);

    return (
        <ThemeProvider theme={theme}>
            <div style={{ minHeight: '100%', background, color, boxSizing: 'border-box' }}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
