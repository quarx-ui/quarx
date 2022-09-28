import { StorybookLightTheme } from './themes/light';
import { StorybookDarkTheme } from './themes/dark';

const ThemeTypes = {
    light: 'light',
    dark: 'dark',
};

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
