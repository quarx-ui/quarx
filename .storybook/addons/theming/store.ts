import type { Theme } from '@core';
import { ThemeAddonConstants, type ThemeType } from './constants.ts';

const isThemeType = (theme: unknown): theme is ThemeType => (
    Object.values(ThemeAddonConstants.ThemeTypes).includes(theme as ThemeType)
);

const getLocallyStoredType = () => {
    if (typeof window === 'undefined') {
        return ThemeAddonConstants.initialThemeAddonState;
    }

    let themeType = window.localStorage.getItem(ThemeAddonConstants.AddonID);
    const isDarkSystemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!themeType && isDarkSystemTheme) {
        themeType = ThemeAddonConstants.ThemeTypes.dark;
    }

    return isThemeType(themeType) ? themeType : ThemeAddonConstants.initialThemeAddonState;
};

const getLocallyStoredTheme = () => ThemeAddonConstants.StoryBookThemes[getLocallyStoredType()];

const isCurrentTheme = (theme: ThemeType) => {
    const currentTheme = getLocallyStoredType();
    return currentTheme === theme;
};

const setTheme = (themeType: ThemeType) => {
    if (typeof window === 'undefined') { return; }
    if (!isThemeType(themeType)) { return; }
    window.localStorage.setItem(ThemeAddonConstants.AddonID, themeType);
};

const setWindowTheme = (theme: Theme) => {
    if (typeof window === 'undefined') { return; }

    window.parent.window.QuarX = { theme };
    window.QuarX = { theme };
};

export const ThemingAddonAPI = {
    getLocallyStoredType,
    getLocallyStoredTheme,
    isCurrentTheme,
    isThemeType,
    setTheme,
    setWindowTheme,
};
