import { OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, ReactChild } from 'react';
import { LinkStyleKeys, LinkStyleParams } from './styles';

export interface LinkPropsWithoutHtml extends
    Partial<LinkStyleParams>,
    WithClassesAndStyles<LinkStyleKeys, LinkStyleParams>
{
    /** @description Дочерний элемент */
    children: ReactChild;

    /** @description Элемент, расположенный слева */
    leftItem?: ReactChild;

    /** @description Элемент, расположенный справа */
    rightItem?: ReactChild;
}

export type LinkProps<C extends ElementType = 'a'> = OverridableProps<LinkPropsWithoutHtml, C>;
export * from './styles/types';
