import { CssVarKeys, getCssVarNames } from '@core';

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

export const RADIO_BUTTON_CSS_VARS = getCssVarNames(radioButtonCssVarNames);

export type RadioButtonCSSVarKeys = CssVarKeys<typeof radioButtonCssVarNames>;
