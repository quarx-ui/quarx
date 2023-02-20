import { defaultPalette, DARKEST } from '@core/styles/engine/theme/palette'
import { changeOpacity, getLightSuperposition } from '@core/styles/engine/utils'
import { getShadowsObj } from '@core/styles/engine/theme/elevations/helpers';
import {
    CreateElevationArg,
    ElevationOptionWithBackgroundAndBorder,
    ElevationSize,
} from './types';
import { DEFAULT_LIGHT_MAIN_ELEVATIONS } from './lightElevations';

const getDefaultColor = (opacity: number) => changeOpacity('#000000', opacity / 100);

export const DEFAULT_DARK_MAIN_ELEVATIONS: Record<ElevationSize, ElevationOptionWithBackgroundAndBorder> = {
    ...DEFAULT_LIGHT_MAIN_ELEVATIONS,
    large: {
        ...DEFAULT_LIGHT_MAIN_ELEVATIONS.large,
        backgroundColor: getLightSuperposition(DARKEST, 0.16),
    },
    xLarge: {
        ...DEFAULT_LIGHT_MAIN_ELEVATIONS.xLarge,
        backgroundColor: getLightSuperposition(DARKEST, 0.16),
    },
};

export const DEFAULT_DARK_SECONDARY_ELEVATIONS: Record<ElevationSize, ElevationOptionWithBackgroundAndBorder> = {
    ...DEFAULT_DARK_MAIN_ELEVATIONS,
    xSmall: {
        shadow: {
            b: 1,
            color: getDefaultColor(20),
        }
    },
    small: {
        shadow: [
            {
                y: 1,
                b: 1,
                color: getDefaultColor(24),
            },
            {
                b: 1,
                color: getDefaultColor(16),
            },
        ],
    },
    medium: {
        shadow: [
            {
                y: 2,
                b: 2,
                color: getDefaultColor(20),
            },
            {
                y: 4,
                b: 12,
                color: getDefaultColor(8),
            },
        ],
    },
    large: {
        shadow: [
            {
                y: 8,
                b: 8,
            },
            {
                y: 4,
                b: 12,
                color: getDefaultColor(20),
            },
        ],
        backgroundColor: getLightSuperposition(DARKEST, 0.16),
    },
    xLarge: {
        shadow: [
            {
                y: 2,
                b: 4,
            },
            {
                y: 12,
                b: 16,
                color: getDefaultColor(20),
            },
        ],
        backgroundColor: getLightSuperposition(DARKEST, 0.16),
    },
};

export const DEFAULT_DARK_ELEVATIONS_OBJ: Required<CreateElevationArg> = {
    main: DEFAULT_DARK_MAIN_ELEVATIONS,
    secondary: DEFAULT_DARK_SECONDARY_ELEVATIONS
};

export const DEFAULT_DARK_ELEVATIONS = getShadowsObj(DEFAULT_DARK_ELEVATIONS_OBJ, {
    color: getDefaultColor(12),
    // border: `1px solid ${defaultPalette.border.main}`,
    background: defaultPalette.background.main,
});
