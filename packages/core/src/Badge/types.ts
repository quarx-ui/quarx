import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML, CounterProps } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { BadgeStyleParams, BadgeStyleKeys } from './styles';

export interface BadgePropsWithoutHTML extends
    Omit<BaseProps, 'permissions'>,
    Partial<BadgeStyleParams>,
    WithClassesAndStyles<BadgeStyleKeys, BadgeStyleParams>
{
    /** Дочерний элемент */
    children: ReactNode,

    /** Элемент, отображаемый с левой стороны компонента */
    leftItem?: ReactNode,

    /** Элемент, отображаемый с правой стороны компонента */
    rightItem?: ReactNode,

    /** Число используемое для отображения во внутреннем компоненте Counter  */
    counter?: number | string,

    /** Объект параметров для настройки внутреннего компонента Counter  */
    counterProps?: Omit<CounterProps, 'children'>,
}

export type BadgeProps = ComponentPropsWithHTML<BadgePropsWithoutHTML>

export * from './styles/types';
