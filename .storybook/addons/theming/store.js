import { ThemeAddonConstants } from './constants';

const isThemeType = (theme) => (
    Object.values(ThemeAddonConstants.ThemeTypes).includes(theme)
);

const getLocallyStoredType = () => {
    const theme = window.localStorage.getItem(ThemeAddonConstants.AddonID);
    return isThemeType(theme) ? theme : ThemeAddonConstants.initialThemeAddonState;
};

const getLocallyStoredTheme = () => (
    ThemeAddonConstants.StoryBookThemes[getLocallyStoredType()]
);

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
