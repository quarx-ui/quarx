import { handleOverflow } from '@core/utils';
import { valuesFromRgb } from '../valuesFromRgb';
import { valuesToRgb } from '../valuesToRgb';
import { getSuperPosition } from './mixColors';

/** Наложение белого цвета на переданный с равной непрозрачностью */
export const getLightSuperpositionWithEqualAlpha = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);

    // Смешиваем целевой цвет и белый в равной части
    const rgb = valuesFromRgb(getSuperPosition(color, '#ffffff', 0.5));

    // Точность значения до 0.001
    const decimal = 10 ** 3;

    // Итоговый альфа-канал
    const calculatedAlpha = Math.round((1 - (1 - alpha) ** 2) * decimal) / decimal;

    return valuesToRgb({ ...rgb, a: calculatedAlpha });
};

/** Наложение белого цвета на целевой,
 * где значение непрозрачности применяется к белому цвету и вычитается из целевого */
export const getLightSuperposition = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);
    return getSuperPosition(color, '#ffffff', alpha);
};
