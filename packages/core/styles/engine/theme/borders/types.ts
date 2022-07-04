import { CreatePaletteArg, PickSxSize } from '@core';
import { CSSProperties } from '@core/styles/engine/styles/types';

export type BordersStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'ridge';
export type BordersSize = PickSxSize<'small' | 'medium' | 'large'>;
export type BordersSide = 'top' | 'right' | 'bottom' | 'left' | 'all';
export type BorderType = Pick<CSSProperties, 'borderWidth' | 'borderStyle' | 'borderColor'>

export type Borders = Record<BordersSize, BorderType>
export type BordersWithStyle = Borders & Record<BordersStyle, Borders>
export type BordersWithSide = BordersWithStyle & Record<BordersSide, BordersWithStyle>

export type BordersColorFC = (color: CSSProperties['borderColor']) => BordersWithSide

export interface ReturnedBorders extends BordersWithSide {
    setColor: BordersColorFC
}

export interface BorderOptionObj {
    width?: number,
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

export type CreateBorders = (options?: CreateBorderArg, palette?: CreatePaletteArg) => ReturnedBorders
