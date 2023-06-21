import {
    DeepPartial,
    PALETTE_STANDARD_KEYS,
    Values,
    CustomPaletteColor,
    CustomPaletteText,
    CustomPaletteDisabled,
    CustomPaletteBackground,
    CustomPaletteBorder,
    CustomPaletteBorderFocus,
    CustomPaletteBackgroundContainer,
    CustomPalette,
    CustomPaletteColorValues,
    WithCustomType, PALETTE_TEXT_KEYS,
} from '@core';
import { WithOverwrites } from '../types';
import { PALETTE_COLORS, PALETTE_TYPES } from './constants';

export type PaletteType = Values<typeof PALETTE_TYPES>;

export type PaletteColor = Values<typeof PALETTE_COLORS> | WithCustomType<CustomPaletteColor>;

export type PaletteStandardKey = Values<typeof PALETTE_STANDARD_KEYS>;
export type PaletteBackgroundTextFieldKey = PaletteStandardKey
export type PaletteBackgroundContainerKey = 'hover' | WithCustomType<CustomPaletteBackgroundContainer>
export type PaletteBorderFocusKey = 'main' | 'inverse' | WithCustomType<CustomPaletteBorderFocus>
export type PaletteTextKey =
    | WithCustomType<CustomPaletteText>
    | Values<typeof PALETTE_TEXT_KEYS>
export type PaletteDisabledKey =
    | WithCustomType<CustomPaletteDisabled>
    | PaletteStandardKey
    | 'border'
    | 'bg'
    | 'contrast'

export interface PaletteBackground extends
    Record<PaletteStandardKey, string>,
    CustomPaletteBackground
{
    textField: Record<PaletteBackgroundTextFieldKey, string>;
    container: Record<PaletteBackgroundContainerKey, string>;
}
export interface PaletteBorder extends
    Record<PaletteStandardKey, string>,
    CustomPaletteBorder
{
    focus: Record<PaletteBorderFocusKey, string>;
}

export type PaletteText = Record<PaletteTextKey, string>
export type PaletteDisabled = Record<PaletteDisabledKey, string>

export interface InitialPalette extends CustomPalette {
    background: string;
    text: string;
    border: PaletteBorder;
    colors: Record<PaletteColor, string>;
    disabled: PaletteDisabled;
}

export type PaletteDecimalPointKey = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
export type PaletteOctalPointKey = '8' | '16' | '24' | '32' | '40' | '48' | '56' | '64' | '72' | '80' | '88' | '96';
export type PaletteTextPointKey = 'min' | 'max' | 'middle'
export type PaletteDecimalKey = PaletteDecimalPointKey | PaletteTextPointKey;
export type PaletteAlphaKey = PaletteOctalPointKey | PaletteTextPointKey;
export type PaletteAlpha = Record<PaletteAlphaKey, string>;
export type PaletteDecimal = Record<PaletteDecimalKey, string>;

export interface PaletteColorValues extends CustomPaletteColorValues {
    default: string;
    contrastText: string;
    border: string;
    surface: string;
    bg: string;
    gradient: string;
    press: string;
    hover: string;
    weaker: PaletteDecimal;
    stronger: PaletteDecimal;
    alpha: PaletteAlpha;
}

export type PaletteColors = Record<PaletteColor, PaletteColorValues>
type OmittedInitialPalette = Omit<InitialPalette, 'colors' | 'background' | 'text'>;

export interface Palette extends OmittedInitialPalette {
    type: PaletteType;
    colors: PaletteColors;
    background: PaletteBackground;
    text: PaletteText;
}
export interface CreatePaletteArg extends DeepPartial<InitialPalette>, WithOverwrites<Palette> {
    type: PaletteType;
}
