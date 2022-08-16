import { Alignment, Axis, Dimension, Side } from './types';
import { ALIGNMENTS, AXES, DIMENSIONS, SIDES } from './constants';

export const sideToAxes: Record<Side, [Axis, Axis]> = {
    [SIDES.top]: [AXES.y, AXES.x],
    [SIDES.left]: [AXES.x, AXES.y],
    [SIDES.right]: [AXES.x, AXES.y],
    [SIDES.bottom]: [AXES.y, AXES.x],
};

export const axisToSides: Record<Axis, [Side, Side]> = {
    [AXES.x]: [SIDES.left, SIDES.right],
    [AXES.y]: [SIDES.top, SIDES.bottom],
};

export const axisAlignmentToSide: Record<Axis, Record<Alignment, Side>> = {
    [AXES.x]: {
        [ALIGNMENTS.start]: SIDES.left,
        [ALIGNMENTS.end]: SIDES.right,
    },
    [AXES.y]: {
        [ALIGNMENTS.start]: SIDES.top,
        [ALIGNMENTS.end]: SIDES.bottom,
    },
};

export const sideToAlignment: Record<Side, Alignment> = {
    [SIDES.top]: ALIGNMENTS.start,
    [SIDES.left]: ALIGNMENTS.start,
    [SIDES.right]: ALIGNMENTS.end,
    [SIDES.bottom]: ALIGNMENTS.end,
};

export const axisToDimension: Record<Axis, Dimension> = {
    [AXES.x]: DIMENSIONS.width,
    [AXES.y]: DIMENSIONS.height,
};

export const sideToOppositeSide: Record<Side, Side> = {
    [SIDES.top]: SIDES.bottom,
    [SIDES.left]: SIDES.right,
    [SIDES.right]: SIDES.left,
    [SIDES.bottom]: SIDES.top,
};
