import {
    BaseProps,
    ComponentPropsWithHTML, OverScreenProps, FooterBlockProps, HeaderBlockProps,
    OmittedModalStyleParams,
} from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { ReactNode } from 'react';
import { ModalStyleParams, ModalStyleKeys, ModalCSSVarKeys } from './styles';

export interface ModalPropsWithoutHTML extends
    Omit<BaseProps, 'permissions'>,
    Omit<Partial<ModalStyleParams>, keyof OmittedModalStyleParams>,
    WithClassesAndStyles<ModalStyleKeys, ModalStyleParams, ModalCSSVarKeys>,
    Pick<HeaderBlockProps, 'title' | 'subTitle' | 'disableCloseButton' | 'CloseButtonProps'>,
    Pick<OverScreenProps, 'onClose' | 'disableCloseByClickAway' | 'open' | 'disableCloseByEscape'>
{
    /** @description Расположение переданных кнопок
     * @property horizontal Горизонтальное расположение
     * @property vertical Вертикальное расположение
     *
     * @default vertical */
    footerDirection?: FooterBlockProps['direction'],

    /** @description Объект для настройки кнопок с дефолтным расположением */
    footerButtons?: FooterBlockProps['buttons'],

    /** @description Элемент используемый в Footer,
     * при передаче которого будут заменены все остальные элементы */
    footer?: FooterBlockProps['children'],

    /** @description Элемент используемый в Header,
     * при передаче которого будут заменены все остальные элементы */
    header?: HeaderBlockProps['children'],

    /** @description Тело модального окна */
    body?: ReactNode,

    /** @description Пропсы передаваемые напрямую компоненту ModalHeader */
    HeaderProps?: Partial<HeaderBlockProps>,

    /** @description Пропсы передаваемые напрямую компоненту ModalFooter */
    FooterProps?: Partial<FooterBlockProps>,

    /** @description Пропсы передаваемые напрямую компоненту Drawer */
    OverScreenProps?: Partial<OverScreenProps>,
}

export type ModalProps = ComponentPropsWithHTML<ModalPropsWithoutHTML>

export * from './styles/types';
