import { PaletteColor } from '@core/styles/engine/theme/palette/types';
import { Values } from '@quarx-ui/core/types';
import { PickQxSize } from '@core/enums/QxSize';
import { SELECTION_TYPE } from './constants';

export type SelectionType = Values<typeof SELECTION_TYPE>;
export type SelectionSize = PickQxSize<'large' | 'medium' | 'small'>;

export interface SelectionStyleParams {
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

    /**  Активное/неактивное состоние компонента
     *
     * @default false */
    disabled: boolean;

    /**  Включить/Отключить обратный порядок элементов
     *
     * @default false */
    reverse: boolean;

    /**  Возможность отключения focus`а компонента
     *
     * @default false */
    disableFocus: boolean;

    /**  Начальное состояние эффекта наведения
     *
     * @default false */
    hover: boolean;
}
