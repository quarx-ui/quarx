import { colorToRgb } from '../colorToRgb';
import { valuesFromRgb } from '../valuesFromRgb';

const baseConvert = (color: string) => {
    const rgba = colorToRgb(color);
    const { r, g, b, a } = valuesFromRgb(rgba);

    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;

    return [red, green, blue, a];
};

const getHue = (r: number, g: number, b: number) => {
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let hue: number;

    if (delta === 0) {
        hue = 0;
    } else if (max === r) {
        hue = ((g - b) / delta) % 6;
    } else if (max === g) {
        hue = (b - r) / delta + 2;
    } else {
        hue = (r - g) / delta + 4;
    }

    hue = Math.round(hue * 60);

    if (hue < 0) {
        hue += 360;
    }

    return hue;
};

const getSaturation = (r: number, g: number, b: number) => {
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === 0) {
        return 0;
    }

    return Math.round((1 - min / max) * 100);
};

const getBrightness = (r: number, g: number, b: number) => {
    const brightness = Math.max(r, g, b) * 100;

    return Math.round(brightness);
};

export const colorToHsb = (color: string) => {
    if (color.startsWith('hsb')) {
        return color;
    }
    const [r, g, b, a] = baseConvert(color);
    const hue = getHue(r, g, b);
    const saturation = getSaturation(r, g, b);
    const brightness = getBrightness(r, g, b);

    const hsba = [hue, saturation, brightness, a].join(', ');

    return `hsba(${hsba})`;
};
