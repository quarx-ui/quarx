import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { TabsContainerStyleKeys, TabsContainerStyleParams } from './styles';

export type TabsContainerPropsWithoutHtml =
    & Partial<TabsContainerStyleParams>
    & WithClassesAndStyles<TabsContainerStyleKeys, TabsContainerStyleParams>

export type TabsContainerProps = ComponentPropsWithHTML<TabsContainerPropsWithoutHtml>
export * from './styles/types';
