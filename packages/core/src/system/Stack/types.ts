import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ReactChild } from 'react';
import { StackCSSVarKeys, StackStyleKeys, StackStyleParams } from './styles';

export interface StackPropsWithoutHtml extends
    BaseProps<HTMLDivElement>,
    Partial<Omit<StackStyleParams, 'divider'>>,
    WithClassesAndStyles<StackStyleKeys, StackStyleParams, StackCSSVarKeys>
{
    /** Разделитель, располагаемый между элементами стека */
    divider?: ReactChild;

    children: Array<ReactChild>;
}

export type StackProps = ComponentPropsWithHTML<StackPropsWithoutHtml>;
export * from './styles/types';
