import { StorybookLightTheme } from './themes/light.ts';
import { StorybookDarkTheme } from './themes/dark.ts';

const ThemeTypes = {
    light: 'light',
    dark: 'dark',
} as const;

const AddonID = 'storybook/quarx-theming';

const initialThemeAddonState = ThemeTypes.light;

const StoryBookThemes = {
    [ThemeTypes.light]: StorybookLightTheme,
    [ThemeTypes.dark]: StorybookDarkTheme,
};

export const ThemeAddonConstants = {
    AddonID,
    initialThemeAddonState,
    StoryBookThemes,
    ThemeTypes,
};

export type ThemeType = typeof ThemeTypes[keyof typeof ThemeTypes];
