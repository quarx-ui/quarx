import {
    BorderOptionArr,
    BorderOptionObj,
    Borders,
    BordersColorFC,
    BordersWithSide,
    BordersWithStyle,
    BordersSide,
    BordersSize,
    BordersStyle,
    BorderType,
    CreateBorders
} from './types';
import { createPalette } from '../palette';

export const DEFAULT_BORDERS_OBJ: Record<BordersSize, BorderOptionObj> = {
    small: {
        width: 1,
        style: 'solid',
        side: 'all',
    },
    medium: {
        width: 2,
        style: 'solid',
        side: 'all',
    },
    large: {
        width: 3,
        style: 'solid',
        side: 'all',
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
    const pxsRegex = new RegExp(/(\d+)(?=px)/g);
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

const getBorderStyle = (borders: Borders, style: BordersStyle): Borders => {
    return Object.entries(borders)
        .reduce((acc, [size, border]) => ({
            ...acc,
            [size]: {
                ...border,
                borderStyle: style,
            },
        }), {} as Borders)
}

const getSide = (borders: Borders, side: BordersSide): BordersWithStyle => {
    const bordersWithSide = Object.entries(borders)
        .reduce((acc, [size, border]) => {
            const width = typeof border.borderWidth === 'number'
                ? border.borderWidth
                : widthValueFromBorder(border.borderWidth as string)[0]

            return ({
                ...acc,
                [size]: {
                    ...border,
                    borderWidth: mapSideToWidth(Number(width))[side]
                },
            });
        }, {} as Borders);

    return {
        ...bordersWithSide,
        ...getBorderStyles(bordersWithSide),
    }
}

const getBorderStyles = (borders: Borders): Omit<BordersWithStyle, keyof Borders> => ({
    solid: getBorderStyle(borders, 'solid'),
    dashed: getBorderStyle(borders, 'dashed'),
    dotted: getBorderStyle(borders, 'dotted'),
    double: getBorderStyle(borders, 'double'),
    ridge: getBorderStyle(borders, 'ridge'),
});

const getBorderSides = (borders: Borders): Omit<BordersWithSide, keyof Borders | keyof BordersWithStyle> => ({
    all: getSide(borders, 'all'),
    top: getSide(borders, 'top'),
    right: getSide(borders, 'right'),
    bottom: getSide(borders, 'bottom'),
    left: getSide(borders, 'left'),
});

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

    const styles = getBorderStyles(borders);
    const sides = getBorderSides(borders)

    const setColor: BordersColorFC = (
        color
    ) => {
        const colorizedBorders = Object.entries(borders)
            .reduce((acc, [size, border]) => ({
                ...acc,
                [size]: {
                    ...border,
                    borderColor: color,
                },
            }), {} as Borders);

        const colorizedStyles = getBorderStyles(colorizedBorders);
        const colorizedSides = getBorderSides(colorizedBorders);

        return {
            ...colorizedBorders,
            ...colorizedStyles,
            ...colorizedSides,
        }
    };

    return {
        ...borders,
        ...styles,
        ...sides,
        setColor,
    }
}

export const borders = createBorders();
