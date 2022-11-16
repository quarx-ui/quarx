import { CssVarKeys, createCssVarNames } from '@core';

export const switcherCssVarNames = [
    'cssFocusWidth',
    'cssFocusColor',
    'cssCheckedColor',
    'cssHoverColor',
    'cssToggleColor',
    'cssDisabledColor',
    'cssContentMargin',
    'cssBorderWidth',
    'cssTogglePosition',
    'cssWidth',
    'cssHeight',
    'cssToggleWidth',
    'cssToggleHeight',
] as const;

export const SWITCHER_CSS_VARS = createCssVarNames(switcherCssVarNames);

export type SwitcherCSSVarKeys = CssVarKeys<typeof switcherCssVarNames>;
