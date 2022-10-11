import { CssVarKeys, getCssVarNames } from '@core/utils/cssVars';
import { baseButtonCssVarNames } from '../../BaseButton';

export const buttonCssVarNames = [
    ...baseButtonCssVarNames,

    'cssInsideMargin',
    'cssOutsideMargin',
    'cssIconMinSize',
] as const;

export type ButtonCSSVarKeys = CssVarKeys<typeof buttonCssVarNames>

export const BUTTON_CSS_VARS = getCssVarNames(buttonCssVarNames);
