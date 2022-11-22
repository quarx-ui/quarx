import { ComponentPropsWithHTML, ModalPropsWithoutHTML, ModalStyleParams, WithClassesAndStyles } from '@core';
import { SidePageStyleKeys } from '@core/src/styled/SidePage/styles';
import { ModalCSSVarKeys } from '@core/src/styled/Modal/styles';

export type SidePagePropsWithoutHtml =
    & Omit<ModalPropsWithoutHTML, 'scrollBehaviour' | 'styles'>
    & WithClassesAndStyles<SidePageStyleKeys, ModalStyleParams, ModalCSSVarKeys>

export type SidePageProps = ComponentPropsWithHTML<SidePagePropsWithoutHtml>;
