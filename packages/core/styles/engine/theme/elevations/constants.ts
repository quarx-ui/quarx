import { changeOpacity } from '@core/styles/engine/utils';
import { DARKEST } from '../palette';
import { getShadowsObj } from './helpers';
import { CreateElevationArg } from './types';

const getDefaultColor = (opacity: number) => changeOpacity(DARKEST, opacity / 100)

export const DEFAULT_ELEVATIONS_OBJ: Required<CreateElevationArg> = {
    xSmall: {
        b: 1,
    },
    small: [
        {
            y: 1,
            b: 1,
            color: getDefaultColor(8),
        },
        {
            b: 1,
        },
    ],
    medium: [
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
    large: [
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
    xLarge: [
        {
            y: 2,
            b: 4,
            color: getDefaultColor(4),
        },
        {
            y: 12,
            b: 16,
        }
    ]
}

export const DEFAULT_ELEVATIONS = getShadowsObj(DEFAULT_ELEVATIONS_OBJ, DARKEST);
