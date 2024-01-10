import { PickQxSize } from '@core/enums';
import { ChipsVariant } from '@core/components';

export type ChipsSize = PickQxSize<'small' | 'medium'>;

export interface OmittedChipsStyleParams {
    onlyStateIcon: boolean;
}

export interface ChipsStyleParams extends OmittedChipsStyleParams {
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

    /** Цвет левой иконки
     *
     * @default undefined */
    leftIconColor?: string;

    /** Отключение фокусировки
     *
     * @default false */
    disableFocus: boolean;

    /** Переворачивать картинку на 180 градусов при состоянии active
     *
     * @default true */
    rotateRightIcon: boolean;
}
