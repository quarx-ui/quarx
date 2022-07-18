import {
    BorderRadii, BorderRadiiCreateFC,
    BorderRadiusOption,
    BorderRadiusSide,
    BorderRadiusStrings,
    CreateBorderRadii,
} from './types';

export const DEFAULT_BORDERS_RADIUS_OBJ: BorderRadii = {
    xSmall: 4,
    small: 6,
    medium: 8,
    large: 12,
    xLarge: 16,
}

const withPx = (value = 0) => `${value}px`;

const getMapSideToRadius = (radius = 0): Record<BorderRadiusSide, string> => ({
    all: withPx(radius),
    top: `${radius}px ${radius}px 0 0`,
    right: `0 ${radius}px ${radius}px 0`,
    left: `${radius}px 0 0 ${radius}px`,
    bottom: `0 0 ${radius}px ${radius}px`,
    'top-left': `${radius}px 0 0`,
    'top-right': `0 ${radius}px 0 0`,
    'bottom-left': `0 0 0 ${radius}px`,
    'bottom-right': `0 0 ${radius}px`,
});

function isRadiusOption (radiusEl: number | string | BorderRadiusOption): radiusEl is BorderRadiusOption {
    return typeof radiusEl !== 'number' && typeof radiusEl !== 'string'
}

const radiusFromString = (radiusString: string) => {
    const pxsRegex = new RegExp(/(\d+)(?=px|%|em|rem)|0/g);
    const psxMatches = radiusString.match(pxsRegex) ?? [];

    return Math.max(...psxMatches.map((el) => Number(el ?? 0)));
}

const getSizeFromRadius = (radius: BorderRadiusOption | number | string) => {
    if (isRadiusOption(radius)) {
        return radius.size;
    }
    if (typeof radius === 'string') {
        return radiusFromString(radius);
    }
    return radius;
}

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
