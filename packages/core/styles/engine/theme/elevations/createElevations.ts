import {
    CreateElevations,
    ElevationsColorFc,
    ElevationsInsetFc,
    ElevationsCreateFc
} from './types';
import { DARKEST } from '../palette';
import { DEFAULT_ELEVATIONS, DEFAULT_ELEVATIONS_OBJ } from './constants';
import {
    getShadowFromColor,
    getShadows,
    getShadowsObj
} from './helpers';

export const createElevations: CreateElevations = (elevationsOps, palette) => {
    const paletteColor = (palette?.type === 'light'
        ? palette.text.main
        : palette?.background.main) ?? DARKEST

    const defaultOps = {
        ...DEFAULT_ELEVATIONS_OBJ,
        ...(elevationsOps ?? {}),
    }

    const elevations = getShadowsObj(defaultOps, paletteColor);

    const setColor: ElevationsColorFc = (color, size = 'medium') => getShadowFromColor(color, defaultOps[size], paletteColor);
    const inset: ElevationsInsetFc = (size = 'medium') => getShadows(defaultOps[size], paletteColor, true);
    const create: ElevationsCreateFc = (options = {}) => {
        const {
            color = paletteColor,
            size = 'medium',
            inset = false,
        } = options;

        return getShadows(defaultOps[size], color, inset);
    }

    return {
        ...DEFAULT_ELEVATIONS,
        ...elevations,
        setColor,
        inset,
        create,
    }
}

export const elevations = createElevations();
