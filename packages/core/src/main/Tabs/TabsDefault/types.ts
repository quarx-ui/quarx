import { ComponentPropsWithHTML, TabItem, WithClassesAndStyles } from '@core';
import { TabsDefaultStyleKeys, TabsDefaultStyleParams } from './styles';
import { TabsPropsCommon } from '../common';

export type TabsDefaultPropsWithoutHtml<T extends TabItem = TabItem> =
    & TabsPropsCommon<T>
    & Partial<TabsDefaultStyleParams>
    & WithClassesAndStyles<TabsDefaultStyleKeys, TabsDefaultStyleParams>;

export type TabsDefaultProps<T extends TabItem = TabItem> =
    ComponentPropsWithHTML<TabsDefaultPropsWithoutHtml<T>>;

export * from './styles/types';
