import { BaseThemeParams } from './base';
import { create } from '@storybook/theming';
import Logo from './assets/dark_logo.svg';

const colors = {
    main: 'rgb(15, 17, 20)',
    secondary: 'rgb(22, 25, 30)',
    reverse: '#F7F7F7',
};

export const StorybookDarkTheme = create({
    base: 'dark',
    brandImage: Logo,
    appBg: colors.main,
    appContentBg: colors.secondary,
    barBg: colors.secondary,
    inputBg: colors.main,
    barTextColor: colors.reverse,
    textColor: colors.reverse,
    inputTextColor: colors.reverse,
    ...BaseThemeParams,
});
