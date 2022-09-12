import { PaletteColor, PickSxSize } from '@core';

export type CounterSize = PickSxSize<'small' | 'medium' | 'large'>
export type CounterType = 'filled' | 'white' | 'ghosted';
export type CounterColor = PaletteColor | 'text';

export interface CounterStyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: CounterSize,

    /** Тип заливки компонента
     * @property filled
     * @property white
     * @property ghosted
     *
     * @default filled */
    type: CounterType,

    /** Цветовая палитра компонента. Значения соответствуют токенам объекта `palette.colors` */
    color: CounterColor,
}
