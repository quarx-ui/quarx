import { handleOverflow } from '@core/utils';
import { colorToRgb } from '../colorToRgb';
import { valuesFromRgb } from '../valuesFromRgb';
import { valuesToRgb } from '../valuesToRgb';
import {
    mixPixelsWithAlpha,
    mixPixels,
    roundDecimals,
    multiplyAlpha,
    getAlphaFactor,
    preMultiplyPixel,
    stackPixels,
} from './helpers';

/** Смешивание двух цветов
 *
 * @param destination - первый цвет
 * @param source - второй цвет
 *
 * @return 'rgb(x, x, x)'
 * */
export const mixColors = (destination: string, source: string) => {
    const { r: r1, g: g1, b: b1 } = valuesFromRgb(colorToRgb(destination));
    const { r: r2, g: g2, b: b2 } = valuesFromRgb(colorToRgb(source));

    const pixels = [
        { px1: r1, px2: r2 },
        { px1: g1, px2: g2 },
        { px1: b1, px2: b2 },
    ];

    const mixedPixels = pixels.map((pxObj) => {
        if (pxObj.px1 === undefined || pxObj.px2 === undefined) {
            return pxObj.px1 ?? pxObj.px2;
        }
        return mixPixels(pxObj.px1, pxObj.px2);
    });

    const mixedColor = {
        r: mixedPixels[0],
        g: mixedPixels[1],
        b: mixedPixels[2],
    };

    return valuesToRgb(mixedColor);
};

/** Наложение двух цветов
 *
 * @param destination - нижний слой
 * @param source - верхний слой
 * @param opacity - непрозрачность, применяется к верхнему слою
 *
 * @return 'rgb(x, x, x)'
 * */
export const getSuperPosition = (destination: string, source: string, opacity: number) => {
    const { r: dR, g: dG, b: dB } = valuesFromRgb(colorToRgb(destination));
    const { r: sR, g: sG, b: sB } = valuesFromRgb(colorToRgb(source));

    const pixels = [
        { d: dR, s: sR },
        { d: dG, s: sG },
        { d: dB, s: sB },
    ];

    const mixedPixels = pixels.map((pxs) => {
        if (pxs.d === undefined || pxs.s === undefined) {
            return pxs.s;
        }

        return mixPixelsWithAlpha(pxs.d, pxs.s, opacity);
    });

    const result = {
        r: mixedPixels[0],
        g: mixedPixels[1],
        b: mixedPixels[2],
    };

    return valuesToRgb(result);
};

export const mixAlphaColors = (destination: string, source: string) => {
    const { r: dR, g: dG, b: dB, ...rgbD } = valuesFromRgb(colorToRgb(destination));
    const { r: sR, g: sG, b: sB, ...rgbS } = valuesFromRgb(colorToRgb(source));

    const dA = handleOverflow(rgbD.a, 0, 1);
    const sA = handleOverflow(rgbS.a, 0, 1);

    if (dA === 1) {
        return getSuperPosition(destination, source, sA);
    }
    if (sA === 1) {
        return source;
    }
    if (dA === sA) {
        const rgb = valuesFromRgb(getSuperPosition(destination, source, 0.5));
        const calculatedAlpha = roundDecimals(multiplyAlpha(dA, sA));
        return valuesToRgb({ ...rgb, a: calculatedAlpha });
    }

    const alphaFactor = getAlphaFactor(dA, sA);
    const pixels = [
        { d: dR, s: sR },
        { d: dG, s: sG },
        { d: dB, s: sB },
    ];

    const mixedPixels = pixels.map((pxObj) => {
        const pxD = handleOverflow(pxObj.d, 0, 255);
        const pxS = handleOverflow(pxObj.s, 0, 255);

        const premultipliedDest = preMultiplyPixel(pxD, alphaFactor.d);
        const premultipliedSource = preMultiplyPixel(pxS, alphaFactor.s);

        return stackPixels(premultipliedDest, premultipliedSource);
    });

    const result = {
        r: mixedPixels[0],
        g: mixedPixels[1],
        b: mixedPixels[2],
        a: multiplyAlpha(dA, sA),
    };

    return valuesToRgb(result);
};
