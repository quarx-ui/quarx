import { colorToRgb } from '../colorToRgb';
import { handleOverflow } from '@core/utils';
import { valuesFromRgb } from '../valuesFromRgb';
import { valuesToRgb } from '../valuesToRgb';

const mixPixel = (px1: number, px2: number) => Math.round(px1 + (px2 - px1) / 2);

/** Смешивание двух цветов
 *
 * @param color1 - первый цвет
 * @param color2 - второй цвет
 *
 * @return rgb(x, x, x)
 * */
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
            return pxObj.px1 ?? pxObj.px2;
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

/** Наложение двух цветов
 *
 * @param background - нижний слой
 * @param foreground - верхний слой
 * @param opacity - непрозрачность, применяется к верхнему слою
 *
 * @return rgb(x, x, x)
 * */
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

/** Наложение белого цвета на переданный с равной непрозрачностью */
export const getLightSuperpositionWithEqualAlpha = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);

    // Смешиваем целевой цвет и белый в равной части
    const rgb = valuesFromRgb(mixAlphaColors(color, '#ffffff', 0.5));

    // Точность значения до 0.001
    const decimal = 10 ** 3;

    // Итоговый альфа-канал
    const calculatedAlpha = Math.round((1 - (1 - alpha) ** 2) * decimal) / decimal;

    return valuesToRgb({ ...rgb, a: calculatedAlpha })
}

/** Наложение белого цвета на целевой,
 * где значение непрозрачности применяется к белому цвету и вычитается из целевого */
export const getLightSuperposition = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);
    return mixAlphaColors(color, '#ffffff', alpha);
};

/** Наложение черного цвета на целевой,
 * где значение непрозрачности применяется к черному цвету и вычитается из целевого */
export const getDarkSuperposition = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);
    return mixAlphaColors(color, '#000000', alpha);
};
