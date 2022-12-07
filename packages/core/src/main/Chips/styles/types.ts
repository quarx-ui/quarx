import { PickQxSize } from '@core/enums';
import { ChipsVariant } from '@core/src';

export type ChipsSize = PickQxSize<'small' | 'medium'>;

export interface ChipsStyleParams {
    /** @description Вариант Chips
     *
     * @default input */
    variant: ChipsVariant;

    /**
     * @description Размер chips
     *
     * @default medium */
    size: ChipsSize;

    /** @description Использование стилей с тенями
     *
     * @default false */
    elevation: boolean;

    /** @description Активное состояние
     *
     * @default false */
    active: boolean;

    /** @description Выключенное состояние
     *
     * @default false */
    disabled: boolean;

    /** @description Наличие левой иконки
     *
     * @default false */
    leftIconExists: boolean;

    /** @description Цвет левой иконки
     *
     * @default undefined */
    leftIconColor?: string;

    /** @description Наличие иконки для закрытия(в случае Input)/Dropdown(в случае Filter)
     *
     * @default false */
    rightIconExists: boolean;

    /** @description Отключение фокусировки
     *
     * @default false */
    disableFocus: boolean;

    /** @description Переворачивать картинку на 180 градусов при состоянии active
     *
     * @default true */
    rotateRightIcon: boolean;
}
