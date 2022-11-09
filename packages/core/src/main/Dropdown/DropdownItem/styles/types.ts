import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
import { PaletteColor } from '@core/styles';
import { DROPDOWN_ITEM_TYPE } from './constants';

export type DropdownItemType = Values<typeof DROPDOWN_ITEM_TYPE>;

export interface OmittedDropdownItemStyleParams {
    /** Состояние наведения */
    hover: boolean;
}

export type DropdownItemSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface DropdownItemStyleParams extends OmittedDropdownItemStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: DropdownItemSize;

    /** Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Отключить фокусное наведение
     *
     * @default false */
    disableFocus: boolean;
}