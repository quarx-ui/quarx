import { Palette, PickQxSize } from '@core';
import { CSSObject } from '@emotion/react';

export type BordersStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'ridge';
export type BordersSize = PickQxSize<'small' | 'medium' | 'large'>;
export type BordersSide = 'top' | 'right' | 'bottom' | 'left' | 'all';
export type BorderType = {
    borderWidth?: string,
    borderStyle?: string,
    borderColor?: string,
}

export type Borders = Record<BordersSize, BorderType>

export type BordersCreateFC = (options: {
        size?: BordersSize,
        color?: CSSObject['borderColor'],
        side?: BordersSide,
        style?: BordersStyle,
    }) => BorderType

export interface ReturnedBorders extends Borders {
    create: BordersCreateFC,
}

export interface BorderOptionObj {
    width?: number | string,
    style?: BordersStyle,
    color?: string,
    side?: BordersSide,
}

export type BorderOptionArr = [
    BorderOptionObj['width'],
    BorderOptionObj['style']?,
    BorderOptionObj['color']?,
    BorderOptionObj['side']?
]

export type CreateBorderArg = Partial<Record<BordersSize, BorderOptionObj | BorderOptionArr | string>>

export type CreateBorders = (options?: CreateBorderArg, palette?: Palette) => ReturnedBorders
