export function valuesFromRgb(rgb: string): { r: number, g: number, b: number, a: number } {
    const rgbRegex = /rgba?\((\d|\d\d|[0-1]\d\d|2[0-4]\d|25[0-5]), ?(\d|\d\d|[0-1]\d\d|2[0-4]\d|25[0-5]), ?(\d|\d\d|[0-1]\d\d|2[0-4]\d|25[0-5])(?:, ?(0|1|\.\d+|0\.\d+))?\)/;
    const rgbMatch = rgb.match(rgbRegex);
    if (!rgbMatch) {
        throw new Error('value doesn\'t match RGB format ');
    }

    const [, r, g, b, a] = rgbMatch;

    return {
        r: +r,
        g: +g,
        b: +b,
        a: +(a ?? 1),
    };
}
