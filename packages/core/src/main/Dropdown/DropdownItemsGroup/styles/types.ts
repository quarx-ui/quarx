import { PickQxSize } from '@core/enums';

export type DropdownItemsGroupSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface OmittedDropdownItemsGroupStyleParams {
    /** Список является прокручиваемым элементом */
    stackScrollable: boolean;
}

export interface DropdownItemsGroupStyleParams extends OmittedDropdownItemsGroupStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: DropdownItemsGroupSize;

    /** Ограничитель, после которого title закрепляется сверху,
     * а элементы внутри группы становятся прокручиваемыми
     *
     * @default Infinity */
    limiter: number;
}
