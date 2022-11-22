import { PaletteColor, PickQxSize, Values } from '@core';
import { SWITCHER_POSITION } from '@quarx-ui/core/src/styled/Switcher/constants';

export type SwitcherPositionType = Values<typeof SWITCHER_POSITION>;

export interface SwitcherStyleParams {
    /** Состояние наведения */
    hover: boolean,

    /** Размер компонента */
    size: PickQxSize<'small' | 'medium' | 'large'>,

    /** Цвет компонента */
    color?: PaletteColor

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean,

    /** Отключение возможности фокуса */
    disableFocus: boolean,

    /** Позиция переключателя относительно текста */
    position: SwitcherPositionType,

    /** Состояние компонента */
    checked: boolean,
}
