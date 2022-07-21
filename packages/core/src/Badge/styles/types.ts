import { PaletteColor, PickSxBorderSize, PickSxSize } from '@core';

export type BadgeSize = PickSxSize<'small' | 'large'>;
export type BadgeBorderRadius = PickSxBorderSize<'square' | 'smooth' | 'rounded'>;
export type BadgeColor = PaletteColor;
export type BadgeType = 'filled' | 'outline';

export interface BadgeStyleParams {
    /** Размер компонента */
    size: BadgeSize,

    /** Тип заливки компонента.
     * Определяет фон компонента, а также цвет его внутренних элементов
     *
     * @property filled залитый компонент, цвет используемых иконок и фон Counter будет белым (по умолчанию)
     * @property outline фон компонента прозрачный,
     * цвет используемых иконок и фон Counter определяется в соответствии со свойством `color` */
    type: BadgeType,

    /** Цветовое решение компонента.
     * Определяет цвет фона или обводки (в зависимости от выбранного `type`) компонента,
     * а также цвет его внутренних элементов. Значения соответствуют токенам объекта `palette.colors` */
    color: BadgeColor,

    /** Скругление компонента. Значения соответствуют токенам объекта `borderRadii` */
    borderRadius: BadgeBorderRadius,
}
