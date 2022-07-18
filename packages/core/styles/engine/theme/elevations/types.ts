import { CreatePaletteArg, PickSxSize } from '@core';
import { CSSObject } from '@emotion/react';

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

export type ElevationsColorFc = (color: CSSObject['color']) => Omit<Elevations, 'setColor'>;

export type CreateElevationArg = Partial<Record<ElevationSize, ElevationOptions>>
export interface Elevations extends ElevationStrings {
    setColor: ElevationsColorFc,
    inset: ElevationStrings,
}
export type CreateElevations = (options?: CreateElevationArg, palette?: CreatePaletteArg) => Elevations
