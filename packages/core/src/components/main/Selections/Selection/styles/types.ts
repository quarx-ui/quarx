import { PaletteColor } from '@core/styles/engine/theme/palette/types';
import { Values } from '@core/types';
import { PickQxSize } from '@core/enums/QxSize';
import { SELECTION_TYPE } from './constants';

export type SelectionType = Values<typeof SELECTION_TYPE>;
export type SelectionSize = PickQxSize<'large' | 'medium' | 'small'>;

export interface SelectionStyleParams {
    /**  Включить/Отключить обратный порядок элементов
     *
     * @default false */
    reverse: boolean;

    /** Тип компонента
     *
     * @default text */
    type: SelectionType;

    /**  Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /**  Размер компонента
     *
     * @default medium */
    size: SelectionSize;

    /**  Возможность отключения focus`а компонента
     *
     * @default false */
    disableFocus: boolean;

    /**  Активное/неактивное состоние компонента
     *
     * @default false */
    disabled: boolean;

    /**  Начальное состояние эффекта наведения
     *
     * @default false */
    hover: boolean;
}
