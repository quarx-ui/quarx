import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ReactChild } from 'react';
import { LinkStyleKeys, LinkStyleParams } from './styles';

export interface LinkPropsWithoutHtml extends
    Partial<LinkStyleParams>,
    WithClassesAndStyles<LinkStyleKeys, LinkStyleParams>
{
    /** Дочерний элемент */
    children: ReactChild,

    /** Элемент, расположенный слева */
    leftItem?: ReactChild,

    /** Элемент, расположенный справа */
    rightItem?: ReactChild,
}

export type LinkProps = ComponentPropsWithHTML<LinkPropsWithoutHtml, 'a'>
export * from './styles/types';
