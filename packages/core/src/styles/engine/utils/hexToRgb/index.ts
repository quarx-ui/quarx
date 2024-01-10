import { expandShortHex } from '../expandShortHex';

export function hexToRgb(hex: string): string {
    if (!hex.startsWith('#') || (hex.length !== 4 && hex.length !== 7)) {
        throw Error('value doesn\'t match hex format');
    }
    const fullHex = hex.length === 4
        ? expandShortHex(hex)
        : hex;

    const hexToNumber = (value: string) => parseInt(value, 16);

    const r = hexToNumber(fullHex.slice(1, 3));
    const g = hexToNumber(fullHex.slice(3, 5));
    const b = hexToNumber(fullHex.slice(5, 7));

    return `rgb(${r}, ${g}, ${b})`;
}
