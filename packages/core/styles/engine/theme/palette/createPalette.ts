import { getLightPalette } from '@core/styles/engine/theme/palette/getLightPalette';
import { getDarkPalette } from '@core/styles/engine/theme/palette/getDarkPalette';
import { deepmerge } from '../../utils';
import { CreatePaletteArg, InitialPalette, Palette } from './types';
import { DEFAULT_COLORS } from './defaultColors';

export function createPalette(palette: CreatePaletteArg = { type: 'light' }): Palette {
    const {
        type,
        overwrites,
        ...base
    } = palette;
    const defaultColors = DEFAULT_COLORS[type] ?? DEFAULT_COLORS.light;
    const initial = deepmerge(defaultColors, base) as InitialPalette;

    const getPalette = type === 'dark'
        ? getDarkPalette
        : getLightPalette;

    const computedPalette = getPalette(initial.colors, initial.background, initial.text);

    return deepmerge({
        type,
        ...initial,
        ...computedPalette,
    }, overwrites);
}

export const defaultPalette = createPalette();
