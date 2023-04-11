import { changeOpacity } from '@core/styles/engine/utils';
import {
    CreateElevations,
    ElevationsCreateFc,
} from './types';
import { DARKEST } from '../palette';
import {
    getShadowsForSize,
    getShadowsObj,
} from './helpers';
import { DEFAULT_LIGHT_ELEVATIONS, DEFAULT_LIGHT_ELEVATIONS_OBJ } from './lightElevations';
import { DEFAULT_DARK_ELEVATIONS_OBJ } from './darkElevations';

export const createElevations: CreateElevations = (elevationsOps, palette) => {
    const isLightTheme = palette?.type === 'light';
    const paletteColor = (isLightTheme
        ? palette.text.main
        : palette?.background.textField.secondary) ?? DARKEST;
    const paletteBackground = isLightTheme
        ? palette?.background.main
        : palette?.background.container.hover;
    const getDefaultColor = (opacity: number) => changeOpacity(paletteColor, opacity / 100);

    const defaultOps = {
        ...isLightTheme
            ? DEFAULT_LIGHT_ELEVATIONS_OBJ
            : DEFAULT_DARK_ELEVATIONS_OBJ,
        ...(elevationsOps ?? {}),
    };

    const elevations = getShadowsObj(defaultOps, {
        color: getDefaultColor(12),
        background: paletteBackground,
    });

    const create: ElevationsCreateFc = (options = {}) => {
        const {
            type = 'main',
            color = getDefaultColor(type === 'main' ? 12 : 20),
            size = 'medium',
            inset = false,
            backgroundColor = paletteBackground,
        } = options;

        return getShadowsForSize(defaultOps[type][size], {
            color,
            inset,
            background: backgroundColor,
        });
    };

    return {
        ...DEFAULT_LIGHT_ELEVATIONS,
        ...elevations,
        create,
    };
};

export const elevations = createElevations();
