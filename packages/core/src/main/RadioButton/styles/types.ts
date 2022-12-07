import { PaletteColor } from '@core/styles';
import { Values } from '@core/types';
import { PickQxSize } from '@core/enums';
import { RADIO_BUTTON_POSITION } from '../constants';

export type RadioButtonPosition = Values<typeof RADIO_BUTTON_POSITION>;

export interface RadioButtonStyleParams {
    /** @description Состояние наведения
     *
     * @default false */
    hover: boolean;

    /** @description Цвет компонента
     *
     * @default brand */
    color: PaletteColor;

    /** @description Состояние компонента
     *
     * @default false */
    checked: boolean;

    /** @description Размер компонента
     *
     * @default medium */
    size: PickQxSize<'small' | 'medium' | 'large'>;

    /** @description Отключение возможности фокуса
     *
     * @default false */
    disableFocus: boolean;

    /** @description Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** @description Позиция переключателя относительно текста
     *
     * @default left */
    position: RadioButtonPosition;
}
