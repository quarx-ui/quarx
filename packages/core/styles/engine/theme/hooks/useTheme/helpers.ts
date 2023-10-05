import { defaultTheme, Theme } from '@core';

export const themeIsQx = (theme: Theme) => {
    const defaultThemeKeys = Object.keys(defaultTheme);
    const contextThemeKeys = Object.keys(theme);
    const defaultKeysIsExist = defaultThemeKeys
        .every((themeKey) => contextThemeKeys.includes(themeKey));
    return defaultKeysIsExist && Boolean(theme.palette);
};
