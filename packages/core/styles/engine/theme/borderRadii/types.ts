import { PickSxSize } from '@core';

export type BorderRadiusSize = PickSxSize<'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'> | 'max';

export type BorderRadiusSide =
    'top' |
    'right' |
    'bottom' |
    'left' |
    'all' |
    'top-left' |
    'top-right' |
    'bottom-left' |
    'bottom-right'

export type BorderRadiusOption = {
    size: number,
    side?: BorderRadiusSide,
}
export type BorderRadii = Record<BorderRadiusSize, number | BorderRadiusOption | string>
export type BorderRadiusStrings = Record<BorderRadiusSize, string>
export type BorderRadiiCreateFC = (side: BorderRadiusSide, size?: BorderRadiusSize) => string
export interface ReturnedBorderRadii extends BorderRadiusStrings {
    create: BorderRadiiCreateFC
}

export type CreateBorderRadiusArg = Partial<BorderRadii>

export type CreateBorderRadii = (options?: CreateBorderRadiusArg) => ReturnedBorderRadii
