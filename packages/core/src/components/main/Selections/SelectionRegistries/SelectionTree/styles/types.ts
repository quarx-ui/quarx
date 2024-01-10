import { PaletteColor, PickQxSize, Values } from '@core';
import { SELECTION_TREE_TYPE } from './constants';

export type SelectionTreeTypes = Values<typeof SELECTION_TREE_TYPE>;
export type SelectionTreeSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface SelectionTreeStyleParams {
    /** Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Размер компонента
     *
     * @default medium */
    size: SelectionTreeSize;

    /** Тип группировки компонента
     *
     * - **contained** – группа в контейнере
     * - **text** – фон компонента прозрачный
     *
     * @default text */
    type: SelectionTreeTypes;
}
