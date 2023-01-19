import { PaletteColor, SelectionTreeSize, SelectionTreeTypes } from '@core';

export interface OmittedStyleParams {
    /** Определяет раскрыты ли дочерние элементы */
    open: boolean;

    /** Определяет состояние нажатия на стрелку */
    isClickedToArrow: boolean;

    /** Возможность стрелки быть в состоянии фокуса
     *
     * @default false */
    disableArrowFocus: boolean;
}

export interface SelectionTreeNodeStyleParams extends OmittedStyleParams {
    /** Цветовая схемма компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Размер компонента
     *
     * @default medium */
    size: SelectionTreeSize;

    /** Тип заливки компонента.
     * Определяет фон компонента, а также цвет его внутренних элементов
     *
     * @property contained группа в контейнере
     * @property text фон компонента прозрачный
     *
     * @default text */
    type: SelectionTreeTypes;

    /** Активное/неактивное состоние компонента
     *
     * @default false */
    disabled: boolean;

    /** Начальное состояние эффекта наведения
     *
     * @default false */
    hover: boolean;

    /** Уровень вложенности компонента
     *
     * @default 0 */
    level: number;
}
