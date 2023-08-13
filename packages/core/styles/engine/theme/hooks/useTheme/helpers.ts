import { defaultTheme, Theme } from '@core';

export const themeIsQx = (theme: Theme) => {
    const defaultThemeKeys = Object.keys(defaultTheme);
    const contextThemeKeys = Object.keys(theme);
    const defaultKeysNotExist = defaultThemeKeys
        .every((themeKey) => contextThemeKeys.includes(themeKey));
    return defaultKeysNotExist && Boolean(theme.palette);
};
