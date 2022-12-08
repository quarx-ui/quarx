import { PickQxSize } from '@core/enums';
import { ChipsVariant } from '@core/src';

export type ChipsSize = PickQxSize<'small' | 'medium'>;

export interface ChipsStyleParams {
    /**
     * Вариант Chips
     * @default input
     * */
    variant: ChipsVariant;

    /**
     * Размер chips
     * @default medium
     * */
    size: ChipsSize;

    /** Использование стилей с тенями */
    elevation: boolean;

    /** Активное состояние */
    active: boolean;

    /** Выключенное состояние */
    disabled: boolean;

    /** Наличие левой иконки */
    leftIconExists: boolean;

    /** Цвет левой иконки */
    leftIconColor?: string;

    /** Наличие иконки для закрытия(в случае Input)/Dropdown(в случае Filter) */
    rightIconExists: boolean;

    /** Отключение фокусировки */
    disableFocus: boolean;

    /**
     * Переворачивать картинку на 180 градусов при состоянии active
     * @default true
     * */
    rotateRightIcon: boolean;
}
