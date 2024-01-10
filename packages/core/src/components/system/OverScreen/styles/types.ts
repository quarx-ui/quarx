import { Values } from '@core/types';
import { OVER_SCREEN_PLACEMENT } from '@core/components/system/OverScreen/constants';

export type OverScreenPlacement = Values<typeof OVER_SCREEN_PLACEMENT>;

export interface OmittedOverScreenStyleParams {
    mounted: boolean;
    margin: string;
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
}
