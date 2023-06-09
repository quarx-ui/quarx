import { BaseProps, OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, ReactChild, ReactNode } from 'react';
import { StackStyleKeys, StackStyleParams } from './styles';

export type StackChild = ReactNode;

export interface StackPropsWithoutHtml extends
    BaseProps,
    Partial<Omit<StackStyleParams, 'divider'>>,
    WithClassesAndStyles<StackStyleKeys, StackStyleParams>
{
    /** Разделитель, располагаемый между элементами контейнера */
    divider?: ReactChild | boolean;

    children: StackChild | Array<StackChild>;
}

export type StackProps<C extends ElementType = 'div'> = OverridableProps<StackPropsWithoutHtml, C>;
export * from './styles/types';
