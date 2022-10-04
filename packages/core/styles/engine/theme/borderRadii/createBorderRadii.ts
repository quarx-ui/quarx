import { DEFAULT_BORDERS_RADIUS_OBJ } from './constants';
import { getMapSideToRadius, getSizeFromRadius, isRadiusOption, withPx } from './helpers';
import { BorderRadiiCreateFC, BorderRadiusStrings, CreateBorderRadii } from './types';

export const createBorderRadii: CreateBorderRadii = (options = {}) => {
    const defaultOps = {
        ...DEFAULT_BORDERS_RADIUS_OBJ,
        ...options
    };

    const radius = Object.entries(defaultOps)
        .reduce((acc, [size, radius]) => ({
            ...acc,
            [size]: isRadiusOption(radius)
                ? getMapSideToRadius(radius.size)[radius.side ?? 'all']
                : typeof radius === 'string' ? radius : withPx(radius)
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
