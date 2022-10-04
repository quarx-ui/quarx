import { PaletteTextPointKey } from '@core';

/** Автоматизирует создание объекта, где ключи расположены в равных интервалах от 0 до 100,
 * а значения вычисляются переданным методом
 *
 * @param method - метод, производящий вычисления
 * @param step - интервал
 * @param k - коэффициент ключа, если необходимо представить диапазон 0-100 в другом виде, например, 0-1
 * */
export function createPoints<ReturnedType extends Record<PaletteTextPointKey, string>>(
    method: (value: number) => string,
    step: number,
    k = 1,
) {
    const points: Partial<ReturnedType> = {};

    const maxKey = (100 - (100 % step)) * k;

    points.min = method(step * k);
    points.middle = method(maxKey / 2);
    points.max = method(maxKey);

    for (let i = step; i <= 100; i += step) {
        const point = i.toString() as PaletteTextPointKey;
        points[point] = method(i * k);
    }
    return points as ReturnedType;
}
