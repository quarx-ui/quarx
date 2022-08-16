import { Rect, Side } from '../../types';
import { axisToDimension, axisToSides, sideToAxes } from '../../maps';

export function getFloatingMainCoords(
    anchorRect: Rect,
    floatingRect: Rect,
    side: Side,
) {
    const [mainAxis] = sideToAxes[side];

    const origin = anchorRect[mainAxis];
    const floatingSize = floatingRect[axisToDimension[mainAxis]];

    const [startSide] = axisToSides[mainAxis];

    if (side === startSide) {
        return origin - floatingSize;
    }

    const anchorSize = anchorRect[axisToDimension[mainAxis]];

    return origin + anchorSize;
}
