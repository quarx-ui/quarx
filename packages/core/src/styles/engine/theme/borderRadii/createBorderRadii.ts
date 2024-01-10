import { getSizeWithUnits, withUnit } from '@core/styles/engine/utils';
import { DEFAULT_BORDERS_RADIUS_OBJ } from './constants';
import { getMapSideToRadius, getSizeFromRadius, isRadiusOption } from './helpers';
import { BorderRadiiCreateFC, BorderRadiusStrings, CreateBorderRadii } from './types';

export const createBorderRadii: CreateBorderRadii = (options = {}) => {
    const defaultOps = {
        ...DEFAULT_BORDERS_RADIUS_OBJ,
        ...options,
    };

    const radius = Object.entries(defaultOps)
        .reduce((acc, [size, defaultRadius]) => ({
            ...acc,
            [size]: isRadiusOption(defaultRadius)
                ? getMapSideToRadius(getSizeWithUnits(defaultRadius.size, true))[defaultRadius.side ?? 'all']
                : withUnit(defaultRadius),
        }), {} as BorderRadiusStrings);

    const create: BorderRadiiCreateFC = (side, size = 'medium') => {
        const sizeFromRadius = getSizeFromRadius(defaultOps[size]);
        return getMapSideToRadius(sizeFromRadius)[side];
    };

    return {
        ...radius,
        create,
    };
};

export const borderRadii = createBorderRadii();
