import { ReactNode, Ref } from 'react';
import { CounterProps } from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { BadgeStyleKeys, BadgeStyleParams } from './style';

export type BadgeSize = BadgeStyleParams['size'];
export type BadgeBorderRadius = BadgeStyleParams['borderRadius']
export type BadgeColor = BadgeStyleParams['color'];
export type BadgeType = BadgeStyleParams['type'];

export type BadgeStyleProps = Partial<BadgeStyleParams>;

export interface BadgeProps extends BadgeStyleProps, WithClassesAndStyles<BadgeStyleKeys, BadgeStyleParams> {
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

export type BadgeHtmlAttributes = Omit<JSX.IntrinsicElements['div'], keyof BadgeProps>
