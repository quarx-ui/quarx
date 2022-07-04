import { valuesFromHsb } from '../valuesFromHsb';
import { colorToHsb } from '../colorToHsb';
import { colorToRgb } from '../colorToRgb';
import { rgbToHex } from '../rgbToHex';
import { handleMax, handleOverflow } from '@core/utils';
import { valuesToHsb } from '../valuesToHsb';

interface ChangeHsbOptions {
    h?: number,
    s?: number,
    b?: number,
    output?: 'hex' | 'rgb' | 'hsb',
}

export const changeHsb = (color: string, options: ChangeHsbOptions) => {
    const tempHsb = colorToHsb(color);
    const { h: toH, s: toS, b: toB, output = 'hsb' } = options;

    const { h: exH, s: exS, b: exB, a } = valuesFromHsb(tempHsb);

    const h = handleMax(toH ?? exH, 360);
    const s = handleMax(toS ?? exS, 100);
    const b = handleMax(toB ?? exB, 100);

    const hsbString = valuesToHsb({ h, s, b, a });

    if (output === 'hex') {
        console.log(colorToRgb(hsbString));
        return rgbToHex(colorToRgb(hsbString));
    }
    if (output === 'rgb') {
        return colorToRgb(hsbString);
    }

    return hsbString;
};

export const incHsb = (color: string, options: ChangeHsbOptions) => {
    const tempHsb = colorToHsb(color);
    const { h: toH = 0, s: toS = 0, b: toB = 0, output = 'hsb' } = options;

    const { h: exH, s: exS, b: exB, a } = valuesFromHsb(tempHsb);

    const h = handleOverflow(exH + toH, 0, 360);
    const s = handleOverflow(exS + toS, 0, 100);
    const b = handleOverflow(exB + toB, 0, 100);

    const hsbString = valuesToHsb({ h, s, b, a });

    if (output === 'hex') {
        return rgbToHex(colorToRgb(hsbString));
    }
    if (output === 'rgb') {
        return colorToRgb(hsbString);
    }

    return hsbString;
};
