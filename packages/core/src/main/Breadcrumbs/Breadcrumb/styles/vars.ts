import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const breadcrumbCssVarNames = [
    'cssBorderWidth',
    'cssFocusColor',
    'cssFocusWidth',
] as const;

export type BreadcrumbCSSVarKeys = CssVarKeys<typeof breadcrumbCssVarNames>

export const BREADCRUMB_CSS_VARS = createCssVarNames(breadcrumbCssVarNames);
