import { PickQxBorderSize, PickQxSize } from '@core';
import { PaletteColor } from '@core/styles';

export type CheckboxSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface CheckboxStyleParams {
    /** Состояние наведения
     *
     * @default false */
    hover: boolean;

    /** Цвет компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Размер компонента
     *
     * @default medium */
    size: CheckboxSize;

    /** Скругление компонента
     *
     * @default medium */
    borderRadius: PickQxBorderSize<'medium' | 'max'>;

    /** Состояние компонента
     *
     * @default false */
    checked: boolean;

    /** Отключение возможности фокуса
     *
     * @default false */
    disableFocus: boolean;

    /** Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** Состояние неопределенности (неполный выбор)
     *
     * @default false */
    indeterminate: boolean;
}
