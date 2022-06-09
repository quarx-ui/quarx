import { colorToRgb } from '../colorToRgb';
import { handleOverflow } from '@core/utils';
import { valuesFromRgb } from '../valuesFromRgb';
import { valuesToRgb } from '../valuesToRgb';

const mixPixel = (px1: number, px2: number) => Math.round(px1 + (px2 - px1) / 2);

export const mixColors = (color1: string, color2: string) => {
    const { r: r1, g: g1, b: b1 } = valuesFromRgb(colorToRgb(color1));
    const { r: r2, g: g2, b: b2 } = valuesFromRgb(colorToRgb(color2));

    const pixels = [
        { px1: r1, px2: r2 },
        { px1: g1, px2: g2 },
        { px1: b1, px2: b2 },
    ];

    const mixedPixels = pixels.map((pxObj) => {
        if (pxObj.px1 === undefined || pxObj.px2 === undefined) {
            return pxObj.px2;
        }
        return mixPixel(pxObj.px1, pxObj.px2);
    });

    const mixedColor = {
        r: mixedPixels[0],
        g: mixedPixels[1],
        b: mixedPixels[2],
    };

    return valuesToRgb(mixedColor);
};

const mixAlphaPixel = (b: number, f: number, a: number) => Math.round(b * (1 - a) + f * a);

export const mixAlphaColors = (background: string, foreground: string, opacity: number) => {
    const { r: bR, g: bG, b: bB } = valuesFromRgb(colorToRgb(background));
    const { r: fR, g: fG, b: fB } = valuesFromRgb(colorToRgb(foreground));

    const pixels = [
        { back: bR, fore: fR },
        { back: bG, fore: fG },
        { back: bB, fore: fB },
    ];

    const mixedPixels = pixels.map((pxObj) => {
        if (pxObj.back === undefined || pxObj.fore === undefined) {
            return pxObj.fore;
        }

        return mixAlphaPixel(pxObj.back, pxObj.fore, opacity);
    });

    const result = {
        r: mixedPixels[0],
        g: mixedPixels[1],
        b: mixedPixels[2],
    };

    return valuesToRgb(result);
};

export const getLightSuperposition = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);
    return mixAlphaColors(color, '#ffffff', alpha);
};

export const getDarkSuperposition = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);
    return mixAlphaColors(color, '#000000', alpha);
};
