import { PaletteColor, PickQxSize, Values } from '@core';
import { SWITCHER_POSITION } from '@core/src/main/Switcher/constants';

export type SwitcherPositionType = Values<typeof SWITCHER_POSITION>;

export interface SwitcherStyleParams {
    /** @description Состояние наведения
     *
     * @default false */
    hover: boolean;

    /** @description Размер компонента
     *
     * @default medium */
    size: PickQxSize<'small' | 'medium' | 'large'>;

    /** @description Цвет компонента
     *
     * @default brand */
    color: PaletteColor;

    /** @description Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** @description Отключение возможности фокуса
     *
     * @default false */
    disableFocus: boolean;

    /** @description Позиция переключателя относительно текста
     *
     * @default left */
    position: SwitcherPositionType;

    /** @description Состояние компонента
     *
     * @default false */
    checked: boolean;
}
