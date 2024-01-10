import { valuesFromHsb } from '../valuesFromHsb';

export const hsbToRgb = (hsb: string) => {
    const { h: exH, s: exS, b: exB, a } = valuesFromHsb(hsb);

    const s = exS / 100;
    const v = exB / 100;
    const h = exH / 60;
    const c = s * v;
    const x = c * (1 - Math.abs((h % 2) - 1));
    const m = v - c;

    let r: number;
    let g: number;
    let b: number;

    if (h >= 0 && h < 1) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 1 && h < 2) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 2 && h < 3) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 3 && h < 4) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 4 && h < 5) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    if (a < 1) {
        const rgba = [r, g, b, a].join(', ');
        return `rgba(${rgba})`;
    }

    const rgb = [r, g, b].join(', ');
    return `rgb(${rgb})`;
};
