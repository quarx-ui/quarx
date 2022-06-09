import { ReactNode, Ref } from 'react';
import { CounterProps, PaletteColor, PickSxBorderSize, PickSxSize } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { BadgeStyleKeys } from './style';

export type BadgeSize = PickSxSize<'small' | 'large'>;
export type BadgeBorderRadius = PickSxBorderSize<'square' | 'smooth' | 'rounded'>;
export type BadgeColor = PaletteColor;
export type BadgeType = 'filled' | 'outline';

export interface BadgeStyleParams {
    /** Размер компонента */
    size?: BadgeSize,

    /** Тип заливки компонента.
     * Определяет фон компонента, а также цвет его внутренних элементов
     *
     * @param filled залитый компонент, цвет используемых иконок и фон Counter будет белым (по умолчанию)
     * @param outline фон компонента прозрачный,
     * цвет используемых иконок и фон Counter определяется в соответствии со свойством `color */
    type?: BadgeType,

    /** Цветовое решение компонента.
     * Определяет цвет фона или обводки (в зависимости от выбранного `type`) компонента,
     * а также цвет его внутренних элементов
     *
     * @param color1 основной светлый цвет
     * @param color2 основной темный цвет
     * @param warning цвет предупреждения
     * @param critical цвет ошибки */
    color?: BadgeColor,

    /** Скругление компонента
     * @param square минимальный радиус скругления и почти острые углы
     * @param smooth среднее скругление
     * @param rounded максимальный радиус скругления, который можно использовать в любом стиле бренда (по умолчанию) */
    borderRadius?: BadgeBorderRadius,
}

export interface BadgeProps extends BadgeStyleParams, WithClassesAndStyles<BadgeStyleKeys, BadgeStyleParams> {
    children: ReactNode,

    /** Элемент, отображаемый с левой стороны компонента */
    leftItem?: ReactNode,

    /** Элемент, отображаемый с правой стороны компонента */
    rightItem?: ReactNode,

    /** Число используемое для отображения во внутреннем компоненте Counter  */
    counter?: number | string,

    /** Объект параметров для настройки внутреннего компонента Counter  */
    counterProps?: Omit<CounterProps, 'children'>,

    /** Ссылка к корневому элементу  */
    ref?: Ref<HTMLDivElement>,

    /** Пользовательский CSS-класс для корневого элемента  */
    className?: string,
}

export type BadgeHtmlAttributes = Omit<JSX.IntrinsicElements['div'], keyof BadgeProps>
