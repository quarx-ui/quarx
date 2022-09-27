import { QxBorderSize } from '@core';

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
export type BorderRadii = Record<QxBorderSize, number | BorderRadiusOption | string>
export type BorderRadiusStrings = Record<QxBorderSize, string>
export type BorderRadiiCreateFC = (side: BorderRadiusSide, size?: QxBorderSize) => string
export interface ReturnedBorderRadii extends BorderRadiusStrings {
    create: BorderRadiiCreateFC
}

export type CreateBorderRadiusArg = Partial<BorderRadii>

export type CreateBorderRadii = (options?: CreateBorderRadiusArg) => ReturnedBorderRadii
