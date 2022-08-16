import { calcOverflow, CalcOverflowOptions } from '../utils';
import { FloatingPositionModifier, Position } from '../types';
import { axisToDimension, axisToSides } from '../maps';

export interface ShiftOptions extends CalcOverflowOptions {
    /**
     * Проверка переполнения по основной оси
     * @default true
     */
    mainAxis?: boolean;
    /**
     * Проверка переполнения по оси выравнивания
     * @default true
     */
    altAxis?: boolean;
    /**
     * Расстояние от границы переполнения, на котором начинает происходить смещение
     * @default 8
     * */
    edgeOffset?: number;
}

export const shift = (options?: ShiftOptions): FloatingPositionModifier => (
    position,
    context,
) => {
    const {
        side,
        mainAxis,
        altAxis,
        rects,
        anchor,
        floating,
        arrangement,
    } = context;

    const {
        mainAxis: checkMainAxis = true,
        altAxis: checkAltAxis = true,
        edgeOffset = 8,
    } = options ?? {};

    if (!checkMainAxis && !checkAltAxis) {
        return position;
    }

    const overflow = calcOverflow({
        ...position,
        rects,
        anchor,
        floating,
        arrangement,
        offset: edgeOffset,
    });

    const newPosition: Position = {
        x: position.x,
        y: position.y,
    };

    const sideOverflow = overflow[side];

    if (checkMainAxis && sideOverflow > 0) {
        const dimension = axisToDimension[mainAxis];
        const anchorSize = rects.anchor[dimension];
        const floatingSize = rects.floating[dimension];
        const [start] = axisToSides[mainAxis];

        const offset = side === start
            ? rects.anchor[mainAxis] - position[mainAxis] - floatingSize
            : position[mainAxis] - anchorSize - rects.anchor[mainAxis];

        const maxShift = anchorSize + floatingSize + 2 * offset;

        const mainShift = Math.min(sideOverflow, maxShift);

        newPosition[mainAxis] = position[mainAxis] + (
            side === start
                ? mainShift
                : -mainShift
        );
    }

    if (checkAltAxis) {
        const [start, end] = axisToSides[altAxis];

        const altSide = overflow[start] > overflow[end]
            ? start
            : end;

        const altOverflow = overflow[altSide];

        if (altOverflow > 0) {
            const dimension = axisToDimension[altAxis];
            const anchorSize = rects.anchor[dimension];
            const floatingSize = rects.floating[dimension];

            const maxAltShift = altSide === start
                ? rects.anchor[altAxis] + anchorSize + edgeOffset - position[altAxis]
                : position[altAxis] + floatingSize + edgeOffset - rects.anchor[altAxis];

            const altShift = Math.min(maxAltShift, altOverflow);

            newPosition[altAxis] = position[altAxis] + (
                altSide === start
                    ? altShift
                    : -altShift
            );
        }
    }

    return newPosition;
};
