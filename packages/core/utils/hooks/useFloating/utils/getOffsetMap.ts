import { getOffsetMapFromTuple } from './getOffsetMapFromTuple';
import { Offset, OffsetMap } from '../types';

export function getOffsetMap(offset: Offset): OffsetMap {
    if (Array.isArray(offset)) {
        return getOffsetMapFromTuple(offset);
    }

    if (typeof offset === 'object') {
        return offset;
    }

    return {
        top: offset,
        left: offset,
        right: offset,
        bottom: offset,
    };
}
