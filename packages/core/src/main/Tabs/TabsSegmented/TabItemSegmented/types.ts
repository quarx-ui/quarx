import { OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, PropsWithChildren, ReactNode } from 'react';
import { TabItemSegmentedStyleKeys, TabItemSegmentedStyleParams } from './styles';

export interface TabItemSegmentedPropsWithoutHtml extends
    Partial<TabItemSegmentedStyleParams>,
    WithClassesAndStyles<TabItemSegmentedStyleKeys, TabItemSegmentedStyleParams>
{
    counter?: ReactNode;
}

export type TabItemSegmentedProps<C extends ElementType = 'button'>
    = OverridableProps<PropsWithChildren<TabItemSegmentedPropsWithoutHtml>, C>

export * from './styles/types';
