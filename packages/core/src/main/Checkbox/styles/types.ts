import { PickQxBorderSize, PickQxSize } from '@core';
import { PaletteColor } from '@core/styles';

export type CheckboxSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface CheckboxStyleParams {
    /** Состояние наведения */
    hover: boolean;

    /** Цвет компонента */
    color: PaletteColor;

    /** Размер компонента */
    size: CheckboxSize;

    /** Скругление компонента */
    borderRadius: PickQxBorderSize<'medium' | 'max'>;

    /** Состояние компонента */
    checked: boolean;

    /** Отключение возможности фокуса */
    disableFocus: boolean;

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean;

    /** Состояние неопределенности (неполный выбор) */
    indeterminate: boolean;
}
