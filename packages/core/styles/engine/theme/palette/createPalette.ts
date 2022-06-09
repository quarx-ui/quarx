import { Palette, light, dark } from './default';
import { deepmerge } from '../../utils';
import { CreatePaletteArg } from './types';

export function createPalette(palette: CreatePaletteArg = { type: 'light' }): Palette {
    const { type } = palette;
    const types = { light, dark };

    return deepmerge(types[type], palette);
}
