import { Values } from '@core/types';
import { OVER_SCREEN_PLACEMENT } from '@core/src/system/OverScreen/constants';

export type OverScreenPlacement = Values<typeof OVER_SCREEN_PLACEMENT>;

export interface OmittedOverScreenStyleParams {
    mounted: boolean;
}

export interface OverScreenStyleParams extends OmittedOverScreenStyleParams {
    /** Расположение компонента на странице
     * - **top**
     * - **bottom**
     * - **right**
     * - **left**
     * - **top-start**
     * - **top-end**
     * - **bottom-start**
     * - **bottom-end**
     * - **center**
     *
     * @default center */
    placement: OverScreenPlacement;

    /** Отступ от границ контейнера в формате строки 'x[, y]' или числа
     *
     * @default 0 */
    margin: string | number;
}
