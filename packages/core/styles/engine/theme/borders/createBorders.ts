import { Borders, BordersCreateFC, CreateBorders } from './types';
import { createPalette } from '../palette';
import { DEFAULT_BORDERS_OBJ } from './constants';
import { getBorder, mapSideToWidth, widthValueFromBorder } from './helpers';

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
