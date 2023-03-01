import { CssVarKeys, createCssVarNames } from '@core';

export const radioButtonCssVarNames = [
    'cssFocusColor',
    'cssFocusWidth',
    'cssBorderWidth',
    'cssBorderColor',
    'cssDisabledColor',
    'cssSize',
    'cssDotSize',
    'cssContentMargin',
] as const;

export const RADIO_BUTTON_CSS_VARS = createCssVarNames(radioButtonCssVarNames);

export type RadioButtonCSSVarKeys = CssVarKeys<typeof radioButtonCssVarNames>;
