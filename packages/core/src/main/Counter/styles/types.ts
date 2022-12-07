import { PaletteColor, PickQxSize } from '@core';

export type CounterSize = PickQxSize<'small' | 'medium' | 'large'>
export type CounterType = 'filled' | 'white' | 'ghosted';
export type CounterColor = PaletteColor | 'text';

export interface CounterStyleParams {
    /** @description Размер компонента
     *
     * @default large */
    size: CounterSize;

    /** @description Тип заливки компонента
     * @property filled
     * @property white
     * @property ghosted
     *
     * @default filled */
    type: CounterType;

    /** @description Цветовая палитра компонента.
     * Значения соответствуют токенам объекта `palette.colors`
     *
     * @default brand */
    color: CounterColor;
}
