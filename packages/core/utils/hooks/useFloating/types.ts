import { RefObject } from 'react';
import { Values } from '@core/types';
import { ALIGNMENTS, AXES, DIMENSIONS, ARRANGEMENTS, SIDES, CLIPPING_CONTEXTS, ROOT_BOUNDARIES } from './constants';
import { FlipOptions } from './modifiers/flip';
import { ShiftOptions } from './modifiers/shift';

export type Side = Values<typeof SIDES>

export type Alignment = Values<typeof ALIGNMENTS>

export type Axis = Values<typeof AXES>

export type Dimension = Values<typeof DIMENSIONS>

export type Arrangement = Values<typeof ARRANGEMENTS>

export type ClippingContext = Values<typeof CLIPPING_CONTEXTS>

export type RootBoundary = Values<typeof ROOT_BOUNDARIES>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Boundary = any

export type AlignedPlacement = `${Side}-${Alignment}`

export type Placement = Side | AlignedPlacement

export type Position = Record<Axis, number>

export type Dimensions = Record<Dimension, number>

export type Rect = Position & Dimensions

export type Offset = number | OffsetTuple | OffsetMap

export type OffsetTuple =
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]

export type OffsetMap = { [key in Side]: number };

export type ClientRect = Rect & OffsetMap

export interface ModifiersOptions {
    offset?: number;
    flip?: FlipOptions;
    shift?: ShiftOptions;
}

export interface UseFloatingProps {
    anchor: RefObject<HTMLElement> | Position;
    floatingRef: RefObject<HTMLElement>;
    open: boolean;
    placement?: Placement;
    disableOffset?: boolean;
    disableFlip?: boolean;
    disableShift?: boolean;
    modifiersOptions?: ModifiersOptions;
    customModifiers?: FloatingPositionModifier[];
    arrangement?: Arrangement;
}

export interface GetFloatingPositionProps {
    placement: Placement;
    anchor: HTMLElement | Position;
    floating: HTMLElement;
    arrangement: Arrangement;
    modifiers?: (FloatingPositionModifier | false | undefined)[];
}

export type FloatingPositionModifier = (
    position: Position,
    context: GetFloatingPositionModifiersContext,
) => Position

export interface GetFloatingPositionContext extends Omit<GetFloatingPositionProps, 'modifiers'> {
    mainAxis: Axis;
    altAxis: Axis;
    rects: Record<'anchor' | 'floating', Rect>;
    side: Side;
    arrangement: Arrangement;
    alignment?: Alignment;
}

export interface GetFloatingPositionModifiersContext extends GetFloatingPositionContext {
    modifiersData: {
        previous: FloatingPositionModifier[];
    };
}

export interface PositionWithModifiersProps {
    position: Position;
    modifiers: FloatingPositionModifier[];
    context: GetFloatingPositionModifiersContext;
}

export interface UseFloatingResult {
    floating: Record<Axis, number>;
}
