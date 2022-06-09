import { NonNegativeInteger } from './types';

export function limitDigitsCount<N extends number>(value: number, digits: NonNegativeInteger<N>): string {
    const maxValue = 10 ** digits - 1;

    return value > maxValue
        ? `${maxValue}+`
        : `${value}`;
}
