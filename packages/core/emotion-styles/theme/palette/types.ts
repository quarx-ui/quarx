import { DeepPartial } from '@core';
import { PaletteColors } from './default';

export type CreatePaletteArg = DeepPartial<PaletteColors> & { type: 'light' | 'dark' }
