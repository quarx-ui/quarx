import { CssVarKeys, createCssVarNames } from '@core/utils';

export const baseButtonCssVarNames = [
    'cssFocusColor',
    'cssFocusWidth',
    'cssBorderWidth',
    'cssPaddingX',
    'cssPaddingY',
] as const;

export const BASE_BUTTON_CSS_VARS = createCssVarNames(baseButtonCssVarNames);

export type BaseButtonCSSVarKeys = CssVarKeys<typeof baseButtonCssVarNames>
