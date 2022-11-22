import { PaletteColor } from '@core/styles';
import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
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
    size: PickQxSize<'small' | 'medium' | 'large'>,

    /** Отключение возможности фокуса */
    disableFocus: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled: boolean,

    /** Позиция переключателя относительно текста */
    position: RadioButtonPosition,
}
