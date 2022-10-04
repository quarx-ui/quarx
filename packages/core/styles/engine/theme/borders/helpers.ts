import { BorderOptionArr, BorderOptionObj, BordersSide, BorderType } from "./types";

export const mapSideToWidth = (width = 0): Record<BordersSide, string | number> => ({
    all: width,
    top: `${width}px 0 0`,
    left: `0 0 0 ${width}px`,
    right: `0 ${width}px 0 0`,
    bottom: `0 0 ${width}px`,
});

export const widthValueFromBorder = (width: string) => {
    const pxsRegex = new RegExp(/(\d+)(?=px|%|em|rem)/g);
    const psxMatches = width.match(pxsRegex);

    return psxMatches ?? [];
}

export const valuesFromBorder = (
    border: string,
    defaultObj: BorderOptionObj,
    paletteColor: string
): BorderType => {
    const styleRegex = new RegExp(/(solid)|(dashed)|(dotted)|(ridge)|(double)/gi);
    const sideRegex = new RegExp(/(all)|(left)|(right)|(top)|(bottom)/gi);

    const styleMatches = border.match(styleRegex);
    const sideMatches = border.match(sideRegex);

    const [width = defaultObj.width] = widthValueFromBorder(border);
    const [style = defaultObj.style] = styleMatches ?? [];
    const [side = defaultObj.side] = sideMatches ?? [];
    const [color = paletteColor] = border
        .split(' ')
        .filter((subStr) => !subStr.match(/(\d+)px/g)?.length && subStr !== style && subStr !== side)

    return {
        borderWidth: mapSideToWidth(Number(width))[side as BordersSide],
        borderColor: color,
        borderStyle: style,
    }
}

export const getBorder = (
    options: BorderOptionObj | BorderOptionArr | string,
    defaultObj: BorderOptionObj,
    paletteColor: string
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
            borderWidth: mapSideToWidth(width)[side as BordersSide]
        }
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
    }
}
