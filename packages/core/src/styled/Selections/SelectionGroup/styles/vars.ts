import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const selectionGroupCssVarNames = [
    'cssTestVar',
] as const;

export type SelectionGroupCSSVarKeys = CssVarKeys<typeof selectionGroupCssVarNames>

export const SELECTION_GROUP_CSS_VARS = createCssVarNames(selectionGroupCssVarNames);
