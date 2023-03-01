import { createCssVarNames, CssVarKeys } from '@core/utils';

export const stackCssVarNames = [
    'cssSpacing',
] as const;

export type StackCSSVarKeys = CssVarKeys<typeof stackCssVarNames>;

export const STACK_CSS_VARS = createCssVarNames(stackCssVarNames);
