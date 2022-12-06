import { PaletteColor } from '@core/styles';
import { PickQxSize } from '@core/enums';
import { Values } from '@core/types';
import { SELECTION_GROUP_TYPE } from './constants';

export type SelectionGroupSize = PickQxSize<'small' | 'medium' | 'large'>;
export type SelectionGroupType = Values<typeof SELECTION_GROUP_TYPE>;

export interface SelectionGroupStyleParams {
    /** Цветовая схемма компонента */
    color: PaletteColor;

    /** Размер компонента */
    size: SelectionGroupSize;

    /** Тип заливки компонента.
     * Определяет фон компонента, а также цвет его внутренних элементов
     *
     * @property contained группа в контейнере
     * @property text фон компонента прозрачный
     *
     * @default text */
    type: SelectionGroupType;
}
