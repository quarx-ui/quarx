import { getFloatingMainCoords } from './getFloatingMainCoords';
import { getFloatingAdditionalCoords } from './getFloatingAdditionalCoords';
import { GetFloatingPositionContext, Position } from '../../types';

export function getFloatingCoords(context: GetFloatingPositionContext): Position {
    const {
        side,
        alignment,
        mainAxis,
        altAxis,
        rects: {
            anchor: anchorRect,
            floating: floatingRect,
        },
    } = context;

    const mainCoords = getFloatingMainCoords(anchorRect, floatingRect, side);
    const additionalCoords = getFloatingAdditionalCoords(anchorRect, floatingRect, alignment, altAxis);

    return {
        [mainAxis]: mainCoords,
        [altAxis]: additionalCoords,
    } as Position;
}
