import { valuesFromRgb } from '../valuesFromRgb';

export function rgbToHex(rgb: string): string {
    const { r, g, b } = valuesFromRgb(rgb);

    // eslint-disable-next-line no-bitwise
    return `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)}`;
}
