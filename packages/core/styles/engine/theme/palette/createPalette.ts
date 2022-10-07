import { deepmerge } from '../../utils';
import { CreatePaletteArg, InitialPalette, Palette } from './types';
import { DEFAULT_COLORS } from './defaultColors';
import { getLightPalette } from '@core/styles/engine/theme/palette/getLightPalette';
import { getDarkPalette } from '@core/styles/engine/theme/palette/getDarkPalette';

export function createPalette(palette: CreatePaletteArg = { type: 'light' }): Palette {
    const {
        type,
        overwrites,
        ...base
    } = palette;
    const initial = deepmerge(DEFAULT_COLORS[type], base) as InitialPalette;

    const getPalette = type === 'light'
        ? getLightPalette
        : getDarkPalette;

    const computedPalette = getPalette(initial.colors, initial.background, initial.text);

    return deepmerge({
        type,
        ...initial,
        ...computedPalette,
    }, overwrites);
}

export const defaultPalette = createPalette();
