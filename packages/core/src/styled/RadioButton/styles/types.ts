import { PaletteColor } from '@core/styles';
import { SelectionSize } from '@quarx-ui/core/src/styled/Selection/types';
import { Values } from '@core/types';
import { RADIO_BUTTON_POSITION } from '../constants';

export type RadioButtonPosition = Values<typeof RADIO_BUTTON_POSITION>

export interface RadioButtonStyleParams {
    /** Состояние наведения */
    hover: boolean,

    /** Цвет компонента */
    color: PaletteColor,

    /** Состояние компонента */
    checked: boolean,

    /** Размер компонента */
    size: SelectionSize,

    /** Отключение возможности фокуса */
    disableFocus: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean,

    /** Позиция переключателя относительно текста */
    position: RadioButtonPosition,
}
