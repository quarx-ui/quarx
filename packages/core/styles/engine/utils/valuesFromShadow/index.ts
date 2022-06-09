import { colorToRgb } from '@core/styles/engine/utils/colorToRgb';

export const valuesFromShadow = (shadow: string) => {
    const inset = shadow.includes('inset');
    const pxsRegex = new RegExp(/(\d+)(?=px)/g);
    const hexRegex = new RegExp(/#(?:[0-9A-F]{6}|[0-9A-F]{3})(?= |$)/gi);
    const rgbRegex = new RegExp(/rgba?\((?:\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]), ?(?:\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]), ?(?:\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5])(?:, ?(0|1|\.\d+|0\.\d+))?\)/gi);

    const psxMatches = shadow.match(pxsRegex);
    const colorMatches = shadow.match(rgbRegex) ?? shadow.match(hexRegex);

    if (!psxMatches || !colorMatches) {
        throw new Error("wrong format of value");
    }

    const [x, y, b, s] = psxMatches;
    const color = colorToRgb(colorMatches[0]);

    return {
        x: +x,
        y: +y,
        b: +b,
        s: +s,
        color,
        inset
    };
}
