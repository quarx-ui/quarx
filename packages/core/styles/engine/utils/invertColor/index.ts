import { colorToRgb } from '../colorToRgb';
import { valuesFromRgb } from '../valuesFromRgb';
import { valuesToRgb } from '../valuesToRgb';

export function invertColor(color: string): string {
    const rgb = colorToRgb(color);
    const { r, g, b, a } = valuesFromRgb(rgb);

    return valuesToRgb({ r: 255 - r, g: 255 - g, b: 255 - b, a });
}
