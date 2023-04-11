import { colorToRgb, getSizeWithUnits } from '@core/styles/engine/utils';

export const valuesFromShadow = (shadow: string) => {
    const inset = shadow.includes('inset');
    const hexRegex = new RegExp(/#(?:[0-9A-F]{6}|[0-9A-F]{3})(?= |$)/gi);
    const rgbRegex = new RegExp(/rgba?\((?:\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]), ?(?:\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]), ?(?:\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5])(?:, ?(0|1|\.\d+|0\.\d+))?\)/gi);

    const units = getSizeWithUnits(shadow);
    const colorMatches = shadow.match(rgbRegex) ?? shadow.match(hexRegex) ?? shadow
        .split(' ')
        .find((el) => ![units, 'inset'].includes(el));

    if (!units || !colorMatches) {
        throw new Error('wrong format of value');
    }

    const [x, y, b, s] = units.split(' ');
    const color = colorToRgb(colorMatches[0]);

    return {
        x,
        y,
        b,
        s,
        color,
        inset,
    };
};
