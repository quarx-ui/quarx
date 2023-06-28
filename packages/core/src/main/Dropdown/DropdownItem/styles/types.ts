import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
import { PaletteColor } from '@core/styles';
import { DROPDOWN_ITEM_TYPE } from './constants';

export type DropdownItemType = Values<typeof DROPDOWN_ITEM_TYPE>;
export type DropdownItemSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface OmittedDropdownItemStyleParams {
    /** Состояние наведения */
    hover: boolean;

    /** Многоточие в заголовке */
    titleEllipsis: boolean;

    /** Многоточие в описании */
    descriptionEllipsis: boolean;

    /** Описание существует */
    descriptionExists: boolean;
}

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

    /** Тип компонента
     *
     * @default default */
    type: DropdownItemType;

    /** Состояние компонента
     *
     * @default false */
    state: boolean;
}
