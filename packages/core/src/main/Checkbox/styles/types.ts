import { PickQxBorderSize, PickQxSize } from '@core';
import { PaletteColor } from '@core/styles';

export type CheckboxSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface CheckboxStyleParams {
    /** @description Состояние наведения
     *
     * @default false */
    hover: boolean;

    /** @description Цвет компонента
     *
     * @default brand */
    color: PaletteColor;

    /** @description Размер компонента
     *
     * @default medium */
    size: CheckboxSize;

    /** @description Скругление компонента
     *
     * @default medium */
    borderRadius: PickQxBorderSize<'medium' | 'max'>;

    /** @description Состояние компонента
     *
     * @default false */
    checked: boolean;

    /** @description Отключение возможности фокуса
     *
     * @default false */
    disableFocus: boolean;

    /** @description Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** @description Состояние неопределенности (неполный выбор)
     *
     * @default false */
    indeterminate: boolean;
}
