import { PaletteColor, PickQxSize, Values } from '@core';
import { SWITCHER_POSITION } from '@core/src/main/Switcher/constants';

export type SwitcherPositionType = Values<typeof SWITCHER_POSITION>;

export interface SwitcherStyleParams {
    /** Состояние наведения
     *
     * @default false */
    hover: boolean;

    /** Размер компонента
     *
     * @default medium */
    size: PickQxSize<'small' | 'medium' | 'large'>;

    /** Цвет компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** Отключение возможности фокуса
     *
     * @default false */
    disableFocus: boolean;

    /** Позиция переключателя относительно текста
     *
     * @default left */
    position: SwitcherPositionType;

    /** Состояние компонента
     *
     * @default false */
    checked: boolean;
}
