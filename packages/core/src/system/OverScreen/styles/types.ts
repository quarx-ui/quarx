import { Values } from '@core/types';
import { OVER_SCREEN_PLACEMENT } from '@core/src/system/OverScreen/constants';

export type OverScreenPlacement = Values<typeof OVER_SCREEN_PLACEMENT>;

export interface OmittedOverScreenStyleParams {
    mounted: boolean;
}

export interface OverScreenStyleParams extends OmittedOverScreenStyleParams {
    /** @description Расположение компонента на странице
     * @property top
     * @property bottom
     * @property right
     * @property left
     * @property top-start
     * @property top-end
     * @property bottom-start
     * @property bottom-end
     * @property center
     *
     * @default center */
    placement: OverScreenPlacement;

    /** @description Отступ от границ контейнера в формате строки 'x[, y]' или числа
     *
     * @default 0 */
    margin: string | number;
}
