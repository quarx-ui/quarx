import { Values } from '@core';
import { SWITCHER_POSITION } from '@core/src/Switcher/constants';
import { SelectionSize } from '@core/src/Selection/types';

export type SwitcherPositionType = Values<typeof SWITCHER_POSITION>;

export interface SwitcherStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Размер компонента */
    size?: SelectionSize,

    /** Изменяет цвет компонента уведомляя об ошибке */
    hasError?: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled?: boolean,

    /** Отключение возможности фокуса */
    disableFocus?: boolean,

    /** Позиция переключателя относительно текста */
    position?: SwitcherPositionType,

    /** Состояние компонента */
    checked?: boolean,
}
