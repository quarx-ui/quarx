import { BaseProps, OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, ReactChild } from 'react';
import { StackCSSVarKeys, StackStyleKeys, StackStyleParams } from './styles';

export type StackChild = ReactChild | false | null;

export interface StackPropsWithoutHtml extends
    BaseProps<HTMLDivElement>,
    Partial<Omit<StackStyleParams, 'divider'>>,
    WithClassesAndStyles<StackStyleKeys, StackStyleParams, StackCSSVarKeys>
{
    /** Разделитель, располагаемый между элементами контейнера */
    divider?: ReactChild;

    children: StackChild | Array<StackChild>;
}

export type StackProps<C extends ElementType = 'div'> = OverridableProps<StackPropsWithoutHtml, C>;
export * from './styles/types';
