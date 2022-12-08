import { BaseProps, ComponentPropsWithHTML } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { CounterStyleKeys, CounterStyleParams } from './styles';

export interface CounterPropsWithoutHTML extends
    Omit<BaseProps<HTMLSpanElement>, 'permissions'>,
    Partial<CounterStyleParams>,
    WithClassesAndStyles<CounterStyleKeys, CounterStyleParams>
{
    /** @description Максимальное количество цифр в счетчике,
     * после превышения этого значения выводятся девятки
     * со знаком "+" на конце
     *
     * @default 2 */
    maxDigits?: number;

    /** @description Числовое значение */
    children: number | string;

    /** @description Удаляет элемент со страницы
     *
     * @default false */
    hidden?: boolean;
}

export type CounterProps = ComponentPropsWithHTML<CounterPropsWithoutHTML, 'span'>;

export * from './styles/types';
