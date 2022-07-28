import { SelectionSize } from '@core/src/Selection/types';
import { BaseColors } from '@core/styles';

export interface RadioButtonStyleParams {
    /** Состояние наведения */
    hover: boolean,

    /** Цвет компонента */
    color?: BaseColors

    /** Состояние компонента */
    checked: boolean,

    /** Размер компонента */
    size: SelectionSize,

    /** Отключение возможности фокуса */
    disableFocus: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean,
}
