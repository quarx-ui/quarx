import { hsbToRgb } from '../hsbToRgb';
import { hexToRgb } from '../hexToRgb';

export function colorToRgb(color: string): string {
    if (color.startsWith('rgb')) {
        return color;
    }
    if (color.startsWith('#')) {
        return hexToRgb(color);
    }
    if (color.startsWith('hsb')) {
        return hsbToRgb(color);
    }
    throw new Error('color must be in HEX, HSB or RGB format');
}
