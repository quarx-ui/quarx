import { PaletteColor } from '@core/styles/engine/theme/palette/types';
import { Values } from '@quarx-ui/core/types';
import { PickQxSize } from '@core/enums/QxSize';
import { SELECTION_TYPE } from './constants';

export type SelectionType = Values<typeof SELECTION_TYPE>;
export type SelectionSize = PickQxSize<'large' | 'medium' | 'small'>;

export interface SelectionStyleParams {
    /** @description Тип компонента
     *
     * @default text */
    type: SelectionType;

    /** @description  Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** @description  Размер компонента
     *
     * @default medium */
    size: SelectionSize;

    /** @description  Активное/неактивное состоние компонента
     *
     * @default false */
    disabled: boolean;

    /** @description  Включить/Отключить обратный порядок элементов
     *
     * @default false */
    reverse: boolean;

    /** @description  Возможность отключения focus`а компонента
     *
     * @default false */
    disableFocus: boolean;

    /** @description  Начальное состояние эффекта наведения
     *
     * @default false */
    hover: boolean;
}
