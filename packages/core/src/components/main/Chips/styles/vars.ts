import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const chipsCssVarNames = [
    'cssBorderWidth',
    'cssFocusColor',
    'cssFocusWidth',
    'cssInsideMargin',
    'cssOutsideMargin',
    'cssPaddingX',
    'cssPaddingY',
] as const;

export type ChipsCSSVarKeys = CssVarKeys<typeof chipsCssVarNames>

export const CHIPS_CSS_VARS = createCssVarNames(chipsCssVarNames);
