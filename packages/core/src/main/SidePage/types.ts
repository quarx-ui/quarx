import { ComponentPropsWithHTML, ModalPropsWithoutHTML, WithClassesAndStyles } from '@core';
import { SidePageStyleKeys, SidePageStyleParams } from '@core/src/main/SidePage/styles';

export type SidePagePropsWithoutHtml =
    & Omit<ModalPropsWithoutHTML, 'scrollBehaviour' | 'styles'>
    & WithClassesAndStyles<SidePageStyleKeys, SidePageStyleParams>

export type SidePageProps = ComponentPropsWithHTML<SidePagePropsWithoutHtml>;
