import { PaletteColor, PickSxSize } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { CounterStyleKeys } from './style';

export type CounterSize = PickSxSize<'small' | 'large'>
export type CounterType = 'filled' | 'outline';
export type CounterColor = PaletteColor;
export type MaxDigits = 1 | 2 | 3 | 4;

export interface CounterStyleParams {
    size?: CounterSize,
    type?: CounterType,
    color?: CounterColor,
}

export interface CounterProps extends CounterStyleParams, WithClassesAndStyles<CounterStyleKeys, CounterStyleParams> {
    /** Максимальное количество цифр в счетчике, после превышения этого значения выводятся девятки
     * со знаком "+" на конце */
    maxDigits?: MaxDigits,
    className?: string;
    children: number | string;
}

export type CounterHtmlAttributes = Omit<JSX.IntrinsicElements['span'], keyof CounterProps>
