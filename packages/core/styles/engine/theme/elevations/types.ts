import { Palette, Values } from '@core';
import { ELEVATION_COORDS, ELEVATION_SIZE, ELEVATION_TYPE } from './constants';

export type ElevationCoords = Values<typeof ELEVATION_COORDS>;
export type ElevationSize = Values<typeof ELEVATION_SIZE>;
export type ElevationType = Values<typeof ELEVATION_TYPE>;

export interface WithBackgroundAndBorder {
    backgroundColor?: string;
    border?: string;
}
export interface ElevationItem extends WithBackgroundAndBorder {
    boxShadow: string;
}

export type ElevationItems = Record<ElevationSize, ElevationItem>;
export type ElevationItemsWithType = Record<ElevationType, ElevationItems>;

export interface ElevationOption extends Partial<Record<ElevationCoords, number | string>> {
    color?: string;
    inset?: boolean;
}
export interface ElevationOptionWithBackgroundAndBorder extends WithBackgroundAndBorder {
    shadow: Array<ElevationOption> | ElevationOption;
}

export type ElevationOptions = ElevationOptionWithBackgroundAndBorder | string;

export interface ElevationsCreateArg {
    color?: string;
    size?: ElevationSize;
    inset?: boolean;
    type?: ElevationType;
    backgroundColor?: string;
    border?: string;
}
export type ElevationsCreateFc = (options?: ElevationsCreateArg) => ElevationItem;

export type ElevationOptionsWithSize = Record<ElevationSize, ElevationOptions>;
export type CreateElevationArg = Record<ElevationType, ElevationOptionsWithSize>;
export interface Elevations extends ElevationItemsWithType {
    create: ElevationsCreateFc;
}
export type CreateElevations = (options?: CreateElevationArg, palette?: Palette) => Elevations;
