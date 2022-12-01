import { OffsetType } from './types';

export const convertOffsets = (value: string | number): OffsetType => {
    const [x = '0', y] = typeof value === 'string'
        ? value
            .replace(/(,? )|(, ?)|(, )/g, ' ')
            .split(' ')
        : [String(value)];

    return {
        x: `${x}px`,
        y: `${y ?? x}px`,
    };
};
