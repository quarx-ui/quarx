import { PaletteColor, PickSxSize } from '@core';

export type CounterSize = PickSxSize<'small' | 'large'>
export type CounterType = 'filled' | 'outline';
export type CounterColor = PaletteColor;

export interface CounterStyleParams {
    size: CounterSize,
    type: CounterType,
    color: CounterColor,
}
