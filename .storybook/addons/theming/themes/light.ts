import { create } from 'storybook/theming';
import { BaseThemeParams } from './base.ts';

export const StorybookLightTheme = create({
    base: 'light',
    ...BaseThemeParams,
});
