import { ComponentPropsWithHTML, TabItem, WithClassesAndStyles } from '@core';
import { TabsContainedStyleKeys, TabsContainedStyleParams } from './styles';
import { TabsPropsCommon } from '../common';

export type TabsContainedPropsWithoutHtml<T extends TabItem = TabItem> =
    & TabsPropsCommon<T>
    & Partial<TabsContainedStyleParams>
    & WithClassesAndStyles<TabsContainedStyleKeys, TabsContainedStyleParams>

export type TabsContainedProps<T extends TabItem = TabItem> =
    ComponentPropsWithHTML<TabsContainedPropsWithoutHtml<T>>
export * from './styles/types';
