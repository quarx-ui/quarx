import { colorToRgb } from '../colorToRgb';
import { valuesFromRgb } from '../valuesFromRgb';

export function getContrastColor(color: string): string {
    const rgb = colorToRgb(color);
    const { r, g, b } = valuesFromRgb(rgb);

    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';
}
