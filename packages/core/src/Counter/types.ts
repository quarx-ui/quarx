import { ComponentPropsWithHTML } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { CounterStyleKeys, CounterStyleParams } from './styles';

export type MaxDigits = 1 | 2 | 3 | 4;

export interface CounterPropsWithoutHTML extends
    Partial<CounterStyleParams>,
    WithClassesAndStyles<CounterStyleKeys, CounterStyleParams>
{
    /** Максимальное количество цифр в счетчике, после превышения этого значения выводятся девятки
     * со знаком "+" на конце */
    maxDigits?: MaxDigits,
    className?: string;
    children: number | string;
}

export type CounterProps = ComponentPropsWithHTML<CounterPropsWithoutHTML, 'span'>

export * from './styles/types';
