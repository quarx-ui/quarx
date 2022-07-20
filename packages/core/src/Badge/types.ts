import { ReactNode, Ref } from 'react';
import { ComponentPropsWithHTML, CounterProps } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { BadgeStyleParams, BadgeStyleKeys } from './styles';

export interface BadgePropsWithoutHTML extends
    BadgeStyleParams,
    WithClassesAndStyles<BadgeStyleKeys, BadgeStyleParams>
{
    children: ReactNode,

    /** Элемент, отображаемый с левой стороны компонента */
    leftItem?: ReactNode,

    /** Элемент, отображаемый с правой стороны компонента */
    rightItem?: ReactNode,

    /** Число используемое для отображения во внутреннем компоненте Counter  */
    counter?: number | string,

    /** Объект параметров для настройки внутреннего компонента Counter  */
    counterProps?: Omit<CounterProps, 'children'>,

    /** Ссылка к корневому элементу  */
    ref?: Ref<HTMLDivElement>,

    /** Пользовательский CSS-класс для корневого элемента  */
    className?: string,
}

export type BadgeProps = ComponentPropsWithHTML<BadgePropsWithoutHTML>

export * from './styles/types';
