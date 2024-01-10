import { OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, PropsWithChildren, ReactNode } from 'react';
import { TabItemDefaultStyleKeys, TabItemDefaultStyleParams } from './styles';

export interface TabItemDefaultPropsWithoutHtml extends
    Partial<TabItemDefaultStyleParams>,
    WithClassesAndStyles<TabItemDefaultStyleKeys, TabItemDefaultStyleParams>
{
    /** Счетчик вкладки */
    counter?: ReactNode;
}

export type TabItemDefaultProps<C extends ElementType = 'button'>
    = OverridableProps<PropsWithChildren<TabItemDefaultPropsWithoutHtml>, C>;

export * from './styles/types';
