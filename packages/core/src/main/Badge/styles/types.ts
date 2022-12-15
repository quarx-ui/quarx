import { CounterColor, PickQxSize, QxBorderSize } from '@core';

export type BadgeSize = PickQxSize<'small' | 'medium' | 'large'>;
export type BadgeBorderRadius = QxBorderSize;
export type BadgeColor = CounterColor;
export type BadgeType = 'contained' | 'outlined' | 'ghosted';

export interface BadgeStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: BadgeSize;

    /** Тип заливки компонента.
     * Определяет фон компонента, а также цвет его внутренних элементов
     *
     * @property contained залитый компонент, цвет используемых иконок и фон Counter будет белым (по умолчанию)
     * @property outlined фон компонента прозрачный,
     * @property ghosted фон компонента полупрозрачный,
     *
     * @default contained */
    type: BadgeType;

    /** Цветовое решение компонента.
     * Определяет цвет фона или обводки (в зависимости от выбранного `type`) компонента,
     * а также цвет его внутренних элементов. Значения соответствуют токенам объекта `palette.colors`
     * с дополнительным вариантом `text`
     *
     * @default brand */
    color: BadgeColor;

    /** Скругление компонента. Значения соответствуют токенам объекта `borderRadii`
     *
     * @default max */
    borderRadius: BadgeBorderRadius;
}
