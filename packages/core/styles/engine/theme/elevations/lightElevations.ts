import { changeOpacity } from '@core/styles/engine/utils/changeOpacity';
import { DARKEST, defaultPalette } from '@core/styles/engine/theme/palette';
import { getShadowsObj } from './helpers';
import {
    CreateElevationArg,
    ElevationOptionWithBackgroundAndBorder,
    ElevationSize,
} from './types';

const getDefaultColor = (opacity: number) => changeOpacity(DARKEST, opacity / 100);

export const DEFAULT_LIGHT_MAIN_ELEVATIONS: Record<ElevationSize, ElevationOptionWithBackgroundAndBorder> = {
    xSmall: {
        shadow: {
            y: 0.5,
            b: 1,
        },
    },
    small: {
        shadow: [
            {
                y: 1,
                b: 1,
                color: getDefaultColor(8),
            },
            {
                b: 1,
            },
        ],
    },
    medium: {
        shadow: [
            {
                y: 2,
                b: 2,
                color: getDefaultColor(8),
            },
            {
                y: 4,
                b: 12,
                color: getDefaultColor(4),
            },
        ],
    },
    large: {
        shadow: [
            {
                y: 8,
                b: 8,
                color: getDefaultColor(4),
            },
            {
                y: 4,
                b: 12,
                color: getDefaultColor(8),
            },
        ],
    },
    xLarge: {
        shadow: [
            {
                y: 2,
                b: 4,
                color: getDefaultColor(4),
            },
            {
                y: 12,
                b: 16,
            },
        ],
    },
};

export const DEFAULT_LIGHT_SECONDARY_ELEVATIONS: Record<ElevationSize, ElevationOptionWithBackgroundAndBorder> = {
    ...DEFAULT_LIGHT_MAIN_ELEVATIONS,
    xSmall: {
        shadow: {
            b: 1,
        }
    },
};

export const DEFAULT_LIGHT_ELEVATIONS_OBJ: Required<CreateElevationArg> = {
    main: DEFAULT_LIGHT_MAIN_ELEVATIONS,
    secondary: DEFAULT_LIGHT_SECONDARY_ELEVATIONS
};

export const DEFAULT_LIGHT_ELEVATIONS = getShadowsObj(DEFAULT_LIGHT_ELEVATIONS_OBJ, {
    color: getDefaultColor(12),
    // border: `1px solid ${defaultPalette.border.main}`,
    background: defaultPalette.background.main,
});
