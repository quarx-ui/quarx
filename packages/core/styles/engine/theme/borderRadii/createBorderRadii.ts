import { DEFAULT_BORDERS_RADIUS_OBJ } from './constants';
import { getMapSideToRadius, getSizeFromRadius, isRadiusOption } from './helpers';
import { BorderRadiiCreateFC, BorderRadiusStrings, CreateBorderRadii } from './types';
import { getSizeWithUnits, withUnit } from '@core/styles/engine/utils';

export const createBorderRadii: CreateBorderRadii = (options = {}) => {
    const defaultOps = {
        ...DEFAULT_BORDERS_RADIUS_OBJ,
        ...options
    };

    const radius = Object.entries(defaultOps)
        .reduce((acc, [size, radius]) => ({
            ...acc,
            [size]: isRadiusOption(radius)
                ? getMapSideToRadius(getSizeWithUnits(radius.size, true))[radius.side ?? 'all']
                : withUnit(radius)
        }), {} as BorderRadiusStrings);

    const create: BorderRadiiCreateFC = (side, size = 'medium') => {
        const sizeFromRadius = getSizeFromRadius(defaultOps[size]);
        return getMapSideToRadius(sizeFromRadius)[side]
    }

    return {
        ...radius,
        create,
    }
}

export const borderRadii = createBorderRadii();
