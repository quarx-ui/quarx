import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';
import { baseButtonCssVarNames } from '../../BaseButton';

export const iconButtonCssVarNames = [
    ...baseButtonCssVarNames,

    'cssSize',
] as const;

export type IconButtonCSSVarKeys = CssVarKeys<typeof iconButtonCssVarNames>

export const ICON_BUTTON_CSS_VARS = createCssVarNames(iconButtonCssVarNames);
