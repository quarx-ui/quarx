import { OffsetTuple, OffsetMap } from '../types';

export function getOffsetMapFromTuple(offset: OffsetTuple): OffsetMap {
    if (offset.length === 2) {
        const [v, h] = offset;

        return {
            top: v,
            left: h,
            right: h,
            bottom: v,
        };
    }

    if (offset.length === 3) {
        const [top, h, bottom] = offset;

        return {
            top,
            left: h,
            right: h,
            bottom,
        };
    }

    const [top, right, bottom, left] = offset;

    return {
        top,
        left,
        right,
        bottom,
    };
}
