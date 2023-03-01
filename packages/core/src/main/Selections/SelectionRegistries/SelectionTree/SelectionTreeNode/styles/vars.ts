import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const selectionTreeNodeVarNames = [
    'cssBorderWidth',
    'cssFocusColor',
    'cssFocusWidth',
] as const;

export type SelectionTreeNodeCSSVarKeys = CssVarKeys<typeof selectionTreeNodeVarNames>

export const SELECTION_TREE_NODE_CSS_VARS = createCssVarNames(selectionTreeNodeVarNames);
