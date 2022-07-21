import { PickSxSize } from '@core/enums';

export type LoaderSizes = PickSxSize<'xSmall' | 'small' | 'base' | 'large' | 'xLarge'>

export interface LoaderStyleParams {
    /** Размер точек: xSmall, small, base, large, xLarge */
    size: LoaderSizes,
}
