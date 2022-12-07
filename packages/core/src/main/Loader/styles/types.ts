import { PickQxSize } from '@core/enums';

export type LoaderSizes = PickQxSize<'xSmall' | 'small' | 'base' | 'large' | 'xLarge'>

export interface LoaderStyleParams {
    /** @description Размер точек: xSmall, small, base, large, xLarge
     *
     * @default large */
    size: LoaderSizes;
}
