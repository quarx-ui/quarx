import { OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, PropsWithChildren, ReactNode } from 'react';
import { TabItemContainedStyleKeys, TabItemContainedStyleParams } from './styles';

export interface TabItemContainedPropsWithoutHtml extends
    Partial<TabItemContainedStyleParams>,
    WithClassesAndStyles<TabItemContainedStyleKeys, TabItemContainedStyleParams>
{
    /** Счетчик вкладки */
    counter?: ReactNode;
}

export type TabItemContainedProps<C extends ElementType = 'button'>
    = OverridableProps<PropsWithChildren<TabItemContainedPropsWithoutHtml>, C>;

export * from './styles/types';
