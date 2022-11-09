import { ThemeAddonConstants } from './constants';

const isThemeType = (theme) => (
    Object.values(ThemeAddonConstants.ThemeTypes).includes(theme)
);

const getLocallyStoredType = () => {
    let themeType = window.localStorage.getItem(ThemeAddonConstants.AddonID);
    const isDarkSystemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (!themeType && isDarkSystemTheme) {
        themeType = ThemeAddonConstants.ThemeTypes.dark
    }

    return isThemeType(themeType) ? themeType : ThemeAddonConstants.initialThemeAddonState;
};

const getLocallyStoredTheme = () => ThemeAddonConstants.StoryBookThemes[getLocallyStoredType()];

const isCurrentTheme = (theme) => {
    const currentTheme = getLocallyStoredType();
    return currentTheme === theme;
};

const setTheme = (themeType) => {
    if (!isThemeType(themeType)) { return; }
    window.localStorage.setItem(ThemeAddonConstants.AddonID, themeType);
};

const setWindowTheme = (theme) => {
    window.parent.window.QuarX = { theme };
};

export const ThemingAddonAPI = {
    getLocallyStoredType,
    getLocallyStoredTheme,
    isCurrentTheme,
    isThemeType,
    setTheme,
    setWindowTheme,
};
