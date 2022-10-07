import { Palette, PickQxSize } from '@core';
import { CSSObject } from '@emotion/react';

export type ElevationSize = PickQxSize<'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'>

export type ElevationStrings = Record<ElevationSize, string>

export type ElevationOption = {
    x?: number | string,
    y?: number | string,
    b?: number | string,
    s?: number | string,
    color?: string,
    inset?: boolean,
}

export type ElevationOptions = ElevationOption | Array<ElevationOption> | string

export type ElevationsColorFc = (color: CSSObject['color'], size?: ElevationSize) => string;
export type ElevationsInsetFc = (size?: ElevationSize) => string
export interface ElevationsCreateArg {
    color?: string,
    size?: ElevationSize,
    inset?: boolean
}
export type ElevationsCreateFc = (options?: ElevationsCreateArg) => string

export type CreateElevationArg = Partial<Record<ElevationSize, ElevationOptions>>
export interface Elevations extends ElevationStrings {
    setColor: ElevationsColorFc,
    inset: ElevationsInsetFc,
    create: ElevationsCreateFc
}
export type CreateElevations = (options?: CreateElevationArg, palette?: Palette) => Elevations
