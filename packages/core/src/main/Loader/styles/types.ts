import { PickQxSize } from '@core/enums';

export type LoaderSizes = PickQxSize<'xSmall' | 'small' | 'base' | 'large' | 'xLarge'>

export interface LoaderStyleParams {
    /** Размер точек: xSmall, small, base, large, xLarge
     *
     * @default large */
    size: LoaderSizes;
}
