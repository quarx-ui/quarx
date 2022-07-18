import {
    BorderOptionArr,
    BorderOptionObj,
    Borders,
    BordersCreateFC,
    BordersSide,
    BordersSize,
    BorderType,
    CreateBorders
} from './types';
import { createPalette } from '../palette';

export const DEFAULT_BORDERS_OBJ: Record<BordersSize, BorderOptionObj> = {
    small: {
        width: 1,
        style: 'solid',
        side: 'all'
    },
    medium: {
        width: 2,
        style: 'solid',
        side: 'all'
    },
    large: {
        width: 3,
        style: 'solid',
        side: 'all'
    },
}

const mapSideToWidth = (width = 0): Record<BordersSide, string | number> => ({
    all: width,
    top: `${width}px 0 0`,
    left: `0 0 0 ${width}px`,
    right: `0 ${width}px 0 0`,
    bottom: `0 0 ${width}px`,
});

const widthValueFromBorder = (width: string) => {
    const pxsRegex = new RegExp(/(\d+)(?=px|%|em|rem)/g);
    const psxMatches = width.match(pxsRegex);

    return psxMatches ?? [];
}

const valuesFromBorder = (
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

const getBorder = (
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

export const createBorders: CreateBorders = (options, palette) => {
    const computedPalette = createPalette(palette);

    const defaultOps = {
        ...DEFAULT_BORDERS_OBJ,
        ...(options ?? {})
    };

    const borders: Borders = {
        small: getBorder(defaultOps.small, DEFAULT_BORDERS_OBJ.small, computedPalette.border.main),
        medium: getBorder(defaultOps.medium, DEFAULT_BORDERS_OBJ.medium, computedPalette.border.main),
        large: getBorder(defaultOps.large, DEFAULT_BORDERS_OBJ.large, computedPalette.border.main),
    };

    const create: BordersCreateFC = (options) => {
        const {
            size = 'medium',
            color = computedPalette.border.main,
            side = 'all',
            style = 'solid'
        } = options;

        const width = typeof borders[size].borderWidth === 'number'
            ? borders[size].borderWidth
            : widthValueFromBorder(borders[size].borderWidth as string)[0]

        return ({
            borderWidth: mapSideToWidth(Number(width))[side],
            borderColor: color,
            borderStyle: style,
        });
    }

    return {
        ...borders,
        create,
    }
}

export const borders = createBorders();
