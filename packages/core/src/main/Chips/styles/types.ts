import { PickQxSize } from '@core/enums';
import { ChipsVariant } from '@core/src';

export type ChipsSize = PickQxSize<'small' | 'medium'>;

export interface ChipsStyleParams {
    /** Вариант Chips
     *
     * @default input */
    variant: ChipsVariant;

    /**
     * Размер chips
     *
     * @default medium */
    size: ChipsSize;

    /** Использование стилей с тенями
     *
     * @default false */
    elevation: boolean;

    /** Активное состояние
     *
     * @default false */
    active: boolean;

    /** Выключенное состояние
     *
     * @default false */
    disabled: boolean;

    /** Наличие левой иконки
     *
     * @default false */
    leftIconExists: boolean;

    /** Цвет левой иконки
     *
     * @default undefined */
    leftIconColor?: string;

    /** Наличие иконки для закрытия(в случае Input)/Dropdown(в случае Filter)
     *
     * @default false */
    rightIconExists: boolean;

    /** Отключение фокусировки
     *
     * @default false */
    disableFocus: boolean;

    /** Переворачивать картинку на 180 градусов при состоянии active
     *
     * @default true */
    rotateRightIcon: boolean;
}
