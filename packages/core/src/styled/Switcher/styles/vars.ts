import { CssVarKeys, getCssVarNames } from '@core';

export const switcherCssVarNames = [
    'cssFocusWidth',
    'cssFocusColor',
    'cssCheckedColor',
    'cssHoverColor',
    'cssToggleColor',
    'cssDisabledColor',
    'cssContentInsideMargin',
    'cssBorderWidth',
    'cssToggleLeftSize',
    'cssWidth',
    'cssHeight',
    'cssToggleWidth',
    'cssToggleHeight',
] as const;

export const SWITCHER_CSS_VARS = getCssVarNames(switcherCssVarNames);

export type SwitcherCSSVarKeys = CssVarKeys<typeof switcherCssVarNames>;
