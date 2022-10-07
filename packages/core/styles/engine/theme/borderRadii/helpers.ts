import { BorderRadiusOption, BorderRadiusSide } from "./types";
import { getSizeWithUnits, withUnit } from '@core/styles/engine/utils';

export const getMapSideToRadius = (radius: string | number = 0): Record<BorderRadiusSide, string> => ({
    all: withUnit(radius),
    top: `${withUnit(radius)} ${withUnit(radius)} 0 0`,
    right: `0 ${withUnit(radius)} ${withUnit(radius)} 0`,
    left: `${withUnit(radius)} 0 0 ${withUnit(radius)}`,
    bottom: `0 0 ${withUnit(radius)} ${withUnit(radius)}`,
    'top-left': `${withUnit(radius)} 0 0`,
    'top-right': `0 ${withUnit(radius)} 0 0`,
    'bottom-left': `0 0 0 ${withUnit(radius)}`,
    'bottom-right': `0 0 ${withUnit(radius)}`,
});

export function isRadiusOption (radiusEl: number | string | BorderRadiusOption): radiusEl is BorderRadiusOption {
    return typeof radiusEl === 'object'
}

export const getSizeFromRadius = (radius: BorderRadiusOption | number | string) => {
    if (isRadiusOption(radius)) {
        return radius.size;
    }

    if (typeof radius === 'string') {
        return getSizeWithUnits(radius, true);
    }

    return radius;
}
