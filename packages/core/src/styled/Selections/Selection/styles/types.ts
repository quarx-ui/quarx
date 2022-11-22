import { PaletteColor } from '@core/styles/engine/theme/palette/types';
import { Values } from '@quarx-ui/core/types';
import { PickQxSize } from '@core/enums/QxSize';
import { SELECTION_TYPE } from './constants';

export type SelectionType = Values<typeof SELECTION_TYPE>;
export type SelectionSize = PickQxSize<'large' | 'medium' | 'small'>;

export interface SelectionStyleParams {
    /** Тип компонента */
    type: SelectionType;

    /** Цветовая схема компонента */
    color: PaletteColor;

    /** Размер компонента */
    size: SelectionSize;

    /** Активное/неактивное состоние компонента */
    disabled: boolean;

    /** Включить/Отключить обратный порядок элементов */
    reverse?: boolean;

    /** Возможность отключения focus`а компонента */
    disableFocus: boolean;

    /** Начальное состояние эффекта наведения */
    hover: boolean;
}
