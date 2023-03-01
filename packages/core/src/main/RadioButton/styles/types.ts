import { PaletteColor } from '@core/styles';
import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
import { RADIO_BUTTON_POSITION } from '../constants';

export type RadioButtonPosition = Values<typeof RADIO_BUTTON_POSITION>;

export interface RadioButtonStyleParams {
    /** Состояние наведения
     *
     * @default false */
    hover: boolean;

    /** Цвет компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Состояние компонента
     *
     * @default false */
    checked: boolean;

    /** Размер компонента
     *
     * @default medium */
    size: PickQxSize<'small' | 'medium' | 'large'>;

    /** Отключение возможности фокуса
     *
     * @default false */
    disableFocus: boolean;

    /** Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** Позиция переключателя относительно текста
     *
     * @default left */
    position: RadioButtonPosition;
}
