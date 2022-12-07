import { PickQxSize } from '@core/enums';

export type HeaderBlockSize = PickQxSize<'small' | 'medium'>

export interface HeaderBlockStyleParams {
    /** @description Размер компонента
     *
     * @default medium */
    size: HeaderBlockSize,
}
