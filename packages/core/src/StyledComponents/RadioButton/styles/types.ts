import { PaletteColor } from '@core/styles';
import { SelectionSize } from '@core/src/StyledComponents/Selection/types';

export interface RadioButtonStyleParams {
    /** Состояние наведения */
    hover: boolean,

    /** Цвет компонента */
    color?: PaletteColor,

    /** Состояние компонента */
    checked: boolean,

    /** Размер компонента */
    size: SelectionSize,

    /** Отключение возможности фокуса */
    disableFocus: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean,
}
