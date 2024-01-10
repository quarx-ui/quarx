import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const textFieldCssVarNames = [
    'cssBorderShadowColor',
    'cssBorderShadowWidth',
    'cssOuterShadowColor',
    'cssOuterShadowWidth',
] as const;

export type TextFieldCSSVarKeys = CssVarKeys<typeof textFieldCssVarNames>

export const TEXT_FIELD_CSS_VARS = createCssVarNames(textFieldCssVarNames);
