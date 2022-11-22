import { PickQxSize } from '@core/enums';

export type HeaderBlockSize = PickQxSize<'small' | 'medium'>

export interface HeaderBlockStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: HeaderBlockSize,
}
