import { Values } from '@core/types';
import { PaletteColor } from '@core/styles';
import { PickQxSize } from '@core/enums';
import { SELECTION_LIST_TYPE } from './constants';

export type SelectionListTypes = Values<typeof SELECTION_LIST_TYPE>;
export type SelectionListSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface SelectionListStyleParams {
    /** Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Размер компонента
     *
     * @default medium */
    size: SelectionListSize;

    /** Тип группировки компонента
     *
     * @property contained группа в контейнере
     * @property text фон компонента прозрачный
     *
     * @default text */
    type: SelectionListTypes;
}
