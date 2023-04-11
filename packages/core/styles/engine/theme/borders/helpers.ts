import { getSizeWithUnits, withUnit } from '@core/styles/engine/utils';
import { BorderOptionArr, BorderOptionObj, BordersSide, BorderType } from './types';

export const mapSideToWidth = (width: number | string = 0): Record<BordersSide, string> => ({
    all: withUnit(width),
    top: `${withUnit(width)} 0 0`,
    left: `0 0 0 ${withUnit(width)}`,
    right: `0 ${withUnit(width)} 0 0`,
    bottom: `0 0 ${withUnit(width)}`,
});

export const valuesFromBorder = (
    border: string,
    defaultObj: BorderOptionObj,
    paletteColor: string,
): BorderType => {
    const styleRegex = new RegExp(/(solid)|(dashed)|(dotted)|(ridge)|(double)/gi);
    const sideRegex = new RegExp(/(all)|(left)|(right)|(top)|(bottom)/gi);

    const styleMatches = border.match(styleRegex);
    const sideMatches = border.match(sideRegex);

    const [style = defaultObj.style] = styleMatches ?? [];
    const [side = defaultObj.side] = sideMatches ?? [];
    const width = getSizeWithUnits(border) ?? defaultObj.width;

    const color = border
        .split(' ')
        .find((el) => ![width, style, side].includes(el)) ?? paletteColor;

    return {
        borderWidth: mapSideToWidth(width)[side as BordersSide],
        borderColor: color,
        borderStyle: style,
    };
};

export const getBorder = (
    options: BorderOptionObj | BorderOptionArr | string,
    defaultObj: BorderOptionObj,
    paletteColor: string,
): BorderType => {
    if (typeof options === 'string') {
        return valuesFromBorder(options, defaultObj, paletteColor);
    }

    if (Array.isArray(options)) {
        const [
            width = defaultObj.width,
            style = defaultObj.style,
            color = paletteColor,
            side = defaultObj.side,
        ] = options;

        return {
            borderColor: color,
            borderStyle: style,
            borderWidth: mapSideToWidth(width)[side as BordersSide],
        };
    }

    const {
        width = defaultObj.width,
        style = defaultObj.style,
        color = paletteColor,
        side = defaultObj.side,
    } = options;

    return {
        borderColor: color,
        borderStyle: style,
        borderWidth: mapSideToWidth(width)[side as BordersSide],
    };
};
