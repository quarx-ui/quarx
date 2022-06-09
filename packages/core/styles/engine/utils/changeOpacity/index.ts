import { colorToRgb } from '../colorToRgb';
import { valuesFromRgb } from '../valuesFromRgb';
import { valuesToRgb } from '../valuesToRgb';
import { handleOverflow } from '@core/utils';

export const changeOpacity = (color: string, opacity: number) => {
    const rgb = colorToRgb(color);
    const { r, g, b } = valuesFromRgb(rgb);

    return valuesToRgb({
        r,
        g,
        b,
        a: handleOverflow(opacity, 0, 1),
    });
};

export const incOpacity = (color: string, opacity: number) => {
    const rgb = colorToRgb(color);
    const { r, g, b, a } = valuesFromRgb(rgb);

    const convertedAlpha = handleOverflow((a + opacity) * 100, 0, 100);

    return valuesToRgb({
        r,
        g,
        b,
        a: Math.round(convertedAlpha) / 100,
    });
};
