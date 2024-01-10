import { Alignment, Axis, Rect } from '../../types';
import { axisToDimension } from '../../maps';
import { ALIGNMENTS } from '../../constants';

export function getFloatingAdditionalCoords(
    anchorRect: Rect,
    floatingRect: Rect,
    alignment: Alignment | undefined,
    axis: Axis,
) {
    const sizeProperty = axisToDimension[axis];

    const origin = anchorRect[axis];

    const anchorSize = anchorRect[sizeProperty];
    const floatingSize = floatingRect[sizeProperty];

    if (alignment === ALIGNMENTS.start) {
        return origin;
    }

    if (alignment === ALIGNMENTS.end) {
        return origin + (anchorSize - floatingSize);
    }

    return origin + (anchorSize - floatingSize) / 2;
}
