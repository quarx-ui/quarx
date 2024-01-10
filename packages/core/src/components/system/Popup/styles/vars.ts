import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const popupCssVarNames = [
    'cssBorderRadius',
    'cssBackgroundColor',
    'cssPadding',
] as const;

export type PopupCSSVarKeys = CssVarKeys<typeof popupCssVarNames>

export const POPUP_CSS_VARS = createCssVarNames(popupCssVarNames);
