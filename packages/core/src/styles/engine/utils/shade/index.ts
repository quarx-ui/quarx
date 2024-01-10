import { valuesFromRgb } from '../valuesFromRgb';
import { colorToRgb } from '../colorToRgb';

export function shade(color: string, percent: number) {
    const rgb = colorToRgb(color);

    const { r, g, b, a } = valuesFromRgb(rgb);

    const oppositeValue = percent < 0
        ? 0
        : (percent / 100) * 255 ** 2;

    const multiplier = 1 - Math.abs(percent / 100);

    const shadeValue = (value: number) => Math.round((multiplier * value ** 2 + oppositeValue) ** 0.5);

    const shadedValues = [r, g, b].map(shadeValue).join(', ');

    return a === 1
        ? `rgb(${shadedValues})`
        : `rgba(${shadedValues}, ${a})`;
}

export const lighten = shade;
export const darken = (color: string, percent: number) => shade(color, -percent);

export const attenuateColor = (color: string, percent: number) => {
    const rgb = colorToRgb(color);

    const { r, g, b } = valuesFromRgb(rgb);

    const attenuate = (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? darken
        : lighten;

    return attenuate(color, percent);
};
