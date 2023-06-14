import { MAX_OFFSET, MIN_OFFSET } from './constants';

export const getOffset = (current: number, segments: number): number => {
    const percent = current / segments;
    return Math.round(
        (MAX_OFFSET - MIN_OFFSET) * percent + MIN_OFFSET,
    );
};
