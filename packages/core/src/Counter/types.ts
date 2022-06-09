import { PickSxSize } from '@core';
import { WithClassesAndStyles } from '../../emotion-styles/types';
import { CounterStyleKeys } from './style';

export type CounterSize = PickSxSize<'small' | 'large'>
export type CounterType = 'filled' | 'outline';
export type CounterColor = 'color1' | 'color2' | 'warning' | 'critical';
export type MaxDigits = 1 | 2 | 3 | 4;

export interface CounterStyleParams {
    size?: CounterSize,
    type?: CounterType,
    color?: CounterColor,
}

export interface CounterProps extends CounterStyleParams, WithClassesAndStyles<CounterStyleKeys> {
    /** Максимальное количество цифр в счетчике, после превышения этого значения выводятся девятки
     * со знаком "+" на конце */
    maxDigits?: MaxDigits,
    className?: string;
    children: number | string;
}

export type CounterHtmlAttributes = Omit<JSX.IntrinsicElements['span'], keyof CounterProps>
