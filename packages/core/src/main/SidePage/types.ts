import { ComponentPropsWithHTML, ModalPropsWithoutHTML, ModalStyleParams, WithClassesAndStyles } from '@core';
import { SidePageStyleKeys } from '@core/src/main/SidePage/styles';
import { ModalCSSVarKeys } from '@core/src/main/Modal/styles';

export type SidePagePropsWithoutHtml =
    & Omit<ModalPropsWithoutHTML, 'scrollBehaviour' | 'styles'>
    & WithClassesAndStyles<SidePageStyleKeys, ModalStyleParams, ModalCSSVarKeys>

export type SidePageProps = ComponentPropsWithHTML<SidePagePropsWithoutHtml>;
