import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const dividerCssVarNames = [
    'cssIndent',
    'cssColor',
] as const;

export type DividerCSSVarKeys = CssVarKeys<typeof dividerCssVarNames>

export const DIVIDER_CSS_VARS = createCssVarNames(dividerCssVarNames);
