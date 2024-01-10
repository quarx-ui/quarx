import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const droppedBreadcrumbCssVarNames = [
    'cssBorderWidth',
    'cssFocusWidth',
    'cssFocusColor',
] as const;

export type DroppedBreadcrumbCSSVarKeys = CssVarKeys<typeof droppedBreadcrumbCssVarNames>

export const DROPPED_BREADCRUMB_CSS_VARS = createCssVarNames(droppedBreadcrumbCssVarNames);
