import { PaletteTextPointKey } from '@core';

export function createPoints<ReturnedType extends Record<PaletteTextPointKey, string>>(
    color: string,
    step: number,
    method: (color: string, value: number) => string,
    k: number,
) {
    const returnedObj: Partial<ReturnedType> = {};

    returnedObj.min = method(color, step * k);
    returnedObj.middle = method(color, 50 * k);
    returnedObj.max = method(color, (100 - (100 % step)) * k);

    for (let i = step; i <= 100; i += step) {
        const point = i.toString();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        returnedObj[point] = method(color, i * k);
    }
    return returnedObj as ReturnedType;
}
