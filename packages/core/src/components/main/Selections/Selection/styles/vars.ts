import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const selectionCssVarNames = [
    'cssBorderWidth',
    'cssFocusColor',
    'cssFocusWidth',
] as const;

export type SelectionCSSVarKeys = CssVarKeys<typeof selectionCssVarNames>

export const SELECTION_CSS_VARS = createCssVarNames(selectionCssVarNames);
