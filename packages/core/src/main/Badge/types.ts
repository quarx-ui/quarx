import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML, CounterProps } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { BadgeStyleParams, BadgeStyleKeys } from './styles';

export interface BadgePropsWithoutHTML extends
    Omit<BaseProps, 'permissions'>,
    Partial<BadgeStyleParams>,
    WithClassesAndStyles<BadgeStyleKeys, BadgeStyleParams>
{
    /** @description Дочерний элемент */
    children: ReactNode;

    /** @description Элемент, отображаемый с левой стороны компонента */
    leftItem?: ReactNode;

    /** @description Элемент, отображаемый с правой стороны компонента */
    rightItem?: ReactNode;

    /** @description Число используемое для отображения во внутреннем компоненте Counter  */
    counter?: number | string;

    /** @description Объект параметров для настройки внутреннего компонента Counter  */
    counterProps?: Omit<CounterProps, 'children'>;
}

export type BadgeProps = ComponentPropsWithHTML<BadgePropsWithoutHTML>

export * from './styles/types';
