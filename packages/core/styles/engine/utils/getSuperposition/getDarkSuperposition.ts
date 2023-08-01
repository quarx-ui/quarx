import { handleOverflow } from '@core/utils';
import { getSuperPosition } from './mixColors';

/** Наложение черного цвета на целевой,
 * где значение непрозрачности применяется к черному цвету и вычитается из целевого */
export const getDarkSuperposition = (color: string, opacity = 1) => {
    const alpha = handleOverflow(opacity, 0, 1);
    return getSuperPosition(color, '#000000', alpha);
};
