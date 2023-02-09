import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const dropdownItemCssVarNames = [
    'cssBorderWidth',
    'cssFocusWidth',
    'cssFocusColor',
] as const;

export type DropdownItemCSSVarKeys = CssVarKeys<typeof dropdownItemCssVarNames>

export const DROPDOWN_ITEM_CSS_VARS = createCssVarNames(dropdownItemCssVarNames);
