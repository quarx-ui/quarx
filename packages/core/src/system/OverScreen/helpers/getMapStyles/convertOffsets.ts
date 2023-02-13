import { OverScreenProps, withUnit } from '@core';
import { MarginType, OffsetType } from './types';

const resolveOffsetValue = (value: string | number) => (
    typeof value === 'string'
        ? value
            .replace(/(,? )|(, ?)|(, )/g, ' ')
            .split(' ')
        : [String(value)]
);

export const convertOffsets = (value: string | number): OffsetType => {
    const [x, y] = resolveOffsetValue(value);

    return {
        x: withUnit(x),
        y: withUnit(y ?? x),
    };
};

export const convertMargins = (value: OverScreenProps['margin'] = 0): MarginType => {
    const [y1, x1, y2, x2] = Array.isArray(value)
        ? value
        : resolveOffsetValue(value);

    return {
        y1: withUnit(y1),
        y2: withUnit(y2 ?? y1),
        x1: withUnit(x1 ?? y1),
        x2: withUnit(x2 ?? x1 ?? y1),
    };
};
