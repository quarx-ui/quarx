import { useState, useEffect } from 'react';

import { PaletteType } from '@core';
import { useEnhancedEffect } from '@core/utils';

export const colorSchemes = {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
};

const onThemeChange = (callback: () => void) => (event: MediaQueryListEvent) => {
    if (!event || !event.matches) {
        return;
    }

    callback();
};

export const useSystemTheme = (initialTheme?: PaletteType) => {
    const [theme, setTheme] = useState(initialTheme || null);

    useEffect(() => {
        // SSR или matchMedia не поддерживаются
        if ((typeof window === 'undefined' || !window.matchMedia)) {
            return undefined;
        }
        const lightMatch = window.matchMedia(colorSchemes.light);
        const onLightMatches = onThemeChange(() => {
            setTheme('light');
        });

        lightMatch.addEventListener('change', onLightMatches);

        const darkMatch = window.matchMedia(colorSchemes.dark);
        const onDarkMatches = onThemeChange(() => {
            setTheme('dark');
        });

        darkMatch.addEventListener('change', onDarkMatches);

        return () => {
            lightMatch.removeEventListener('change', onLightMatches);
            darkMatch.removeEventListener('change', onDarkMatches);
        };
    }, []);

    useEnhancedEffect(() => {
        // SSR or matchMedia not supported
        if (typeof window === 'undefined' || !window.matchMedia) {
            return;
        }
        if (window.matchMedia(colorSchemes.dark).matches && theme !== 'dark') {
            setTheme('dark');
        } else if (window.matchMedia(colorSchemes.light).matches && theme !== 'light') {
            setTheme('light');
        }
    }, [theme]);

    return theme;
};
