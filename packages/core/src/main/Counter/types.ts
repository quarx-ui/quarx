import { BaseProps, ComponentPropsWithHTML } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { CounterStyleKeys, CounterStyleParams } from './styles';

export interface CounterPropsWithoutHTML extends
    Omit<BaseProps<HTMLSpanElement>, 'permissions'>,
    Partial<CounterStyleParams>,
    WithClassesAndStyles<CounterStyleKeys, CounterStyleParams>
{
    /** Максимальное количество цифр в счетчике, после превышения этого значения выводятся девятки
     * со знаком "+" на конце */
    maxDigits?: number;

    /** Числовое значение */
    children: number | string;

    /** Удаляет элемент со страницы */
    hidden?: boolean;
}

export type CounterProps = ComponentPropsWithHTML<CounterPropsWithoutHTML, 'span'>

export * from './styles/types';
