import { CssVarKeys, getCssVarNames } from '@core/utils/cssVars';

export const modalCssVarNames = [
    'cssBoxMargin',
    'cssBorderRadius',
] as const;

export const MODAL_CSS_VARS = getCssVarNames(modalCssVarNames);

export type ModalCSSVarKeys = CssVarKeys<typeof modalCssVarNames>;
