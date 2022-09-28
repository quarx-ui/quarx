import { BaseThemeParams } from './base';
import { create } from '@storybook/theming';
import Logo from './assets/light_logo.svg';

export const StorybookLightTheme = create({
    base: 'light',
    brandImage: Logo,
    ...BaseThemeParams,
});
