import { DeepPartial } from '@core';
import { WithOverwrites } from '@core/styles/engine/theme/types';

export type PaletteType = 'light' | 'dark';

export type PaletteColor = 'brand' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';

export type PaletteStandardKey = 'main' | 'secondary'
export type PaletteBackgroundTextFieldKey = PaletteStandardKey
export type PaletteBackgroundContainerKey = 'hover'
export type PaletteBorderFocusKey = 'light' | 'dark'
export type PaletteTextKey =
    PaletteStandardKey
    | 'tertiary'
    | 'constant'
export type PaletteDisabledKey =
    PaletteStandardKey
    | 'border'
    | 'bg'
    | 'contrast'

export interface PaletteBackground extends Record<PaletteStandardKey, string> {
    textField: Record<PaletteBackgroundTextFieldKey, string>,
    container: Record<PaletteBackgroundContainerKey, string>
}

export interface PaletteBorder extends Record<PaletteStandardKey, string> {
    focus: Record<PaletteBorderFocusKey, string>
}

export type PaletteText = Record<PaletteTextKey, string>
export type PaletteDisabled = Record<PaletteDisabledKey, string>

export interface InitialPalette {
    background: string,
    text: string,
    border: PaletteBorder,
    colors: Record<PaletteColor, string>
    disabled: PaletteDisabled,
}

export type PaletteDecimalPointKey = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
export type PaletteOctalPointKey = '8' | '16' | '24' | '32' | '40' | '48' | '56' | '64' | '72' | '80' | '88' | '96';
export type PaletteTextPointKey = 'min' | 'max' | 'middle'

export type PaletteDecimalKey = PaletteDecimalPointKey | PaletteTextPointKey;
export type PaletteAlphaKey = PaletteOctalPointKey | PaletteTextPointKey;

export type PaletteAlpha = Record<PaletteAlphaKey, string>;
export type PaletteDecimal = Record<PaletteDecimalKey, string>;

export interface PaletteColorValues {
    default: string,
    contrastText: string,
    border: string,
    surface: string,
    bg: string,
    gradient: string,
    press: string,
    hover: string,
    weaker: PaletteDecimal,
    stronger: PaletteDecimal,
    alpha: PaletteAlpha,
}

export type PaletteColors = Record<PaletteColor, PaletteColorValues>

export interface Palette extends Omit<InitialPalette, 'colors' | 'text' | 'background'> {
    type: PaletteType,
    colors: PaletteColors,
    background: PaletteBackground,
    text: PaletteText,
}

export interface CreatePaletteArg extends DeepPartial<InitialPalette>, WithOverwrites<Palette> {
    type: PaletteType,
}
