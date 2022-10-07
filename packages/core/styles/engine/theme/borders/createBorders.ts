import { Borders, BordersCreateFC, CreateBorders } from './types';
import { defaultPalette } from '../palette';
import { DEFAULT_BORDERS_OBJ } from './constants';
import { getBorder, mapSideToWidth } from './helpers';

export const createBorders: CreateBorders = (
    options,
    palette = defaultPalette,
) => {
    const defaultOps = {
        ...DEFAULT_BORDERS_OBJ,
        ...(options ?? {})
    };

    const borders: Borders = {
        small: getBorder(defaultOps.small, DEFAULT_BORDERS_OBJ.small, palette.border.main),
        medium: getBorder(defaultOps.medium, DEFAULT_BORDERS_OBJ.medium, palette.border.main),
        large: getBorder(defaultOps.large, DEFAULT_BORDERS_OBJ.large, palette.border.main),
    };

    const create: BordersCreateFC = (options) => {
        const {
            size = 'medium',
            color = palette.border.main,
            side = 'all',
            style = 'solid'
        } = options;

        return ({
            borderWidth: mapSideToWidth(borders[size].borderWidth)[side],
            borderColor: color as string,
            borderStyle: style,
        });
    }

    return {
        ...borders,
        create,
    }
}

export const borders = createBorders();
