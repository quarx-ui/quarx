import { BorderRadiusOption, BorderRadiusSide } from "./types";


export const withPx = (value = 0) => `${value}px`;

export const getMapSideToRadius = (radius = 0): Record<BorderRadiusSide, string> => ({
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

export function isRadiusOption (radiusEl: number | string | BorderRadiusOption): radiusEl is BorderRadiusOption {
    return typeof radiusEl !== 'number' && typeof radiusEl !== 'string'
}

export const radiusFromString = (radiusString: string) => {
    const pxsRegex = new RegExp(/(\d+)(?=px|%|em|rem)|0/g);
    const psxMatches = radiusString.match(pxsRegex) ?? [];

    return Math.max(...psxMatches.map((el) => Number(el ?? 0)));
}

export const getSizeFromRadius = (radius: BorderRadiusOption | number | string) => {
    if (isRadiusOption(radius)) {
        return radius.size;
    }
    if (typeof radius === 'string') {
        return radiusFromString(radius);
    }
    return radius;
}
