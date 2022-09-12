import { ComponentPropsWithHTML, TabItem, WithClassesAndStyles } from '@core';
import { TabsSegmentedStyleKeys, TabsSegmentedStyleParams } from './styles';
import { TabsPropsCommon } from '../common';

export interface TabsSegmentedPropsWithoutHtml<T extends TabItem = TabItem> extends
    TabsPropsCommon<T>,
    Partial<TabsSegmentedStyleParams>,
    WithClassesAndStyles<TabsSegmentedStyleKeys, TabsSegmentedStyleParams> {
    /** Переключение в режим отображения иконок в виде вкладок, доступно
     * только для `Tabs` с типом `segmented` */
    icons?: boolean,
}

export type TabsSegmentedProps<T extends TabItem = TabItem> =
    ComponentPropsWithHTML<TabsSegmentedPropsWithoutHtml<T>>
export * from './styles/types';
