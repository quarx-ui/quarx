import { CreatePaletteArg, PickSxSize } from '@core';

export type ElevationSize = PickSxSize<'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'>

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

export type ElevationsCreateFc = (color: string) => ElevationStrings;

export type CreateElevationArg = Partial<Record<ElevationSize, ElevationOptions>>
export interface Elevations extends ElevationStrings {
    create: ElevationsCreateFc,
}
export type CreateElevations = (options?: CreateElevationArg, palette?: CreatePaletteArg) => Elevations
