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
    /** Расположение переданных кнопок
     * - **horizontal** – горизонтальное расположение
     * - **vertical** – вертикальное расположение
     *
     * @default vertical */
    footerDirection?: FooterBlockProps['direction'];

    /** Объект для настройки кнопок с дефолтным расположением */
    footerButtons?: FooterBlockProps['buttons'];

    /** Элемент используемый в Footer,
     * при передаче которого будут заменены все остальные элементы */
    footer?: FooterBlockProps['children'];

    /** Элемент используемый в Header,
     * при передаче которого будут заменены все остальные элементы */
    header?: HeaderBlockProps['children'];

    /** Тело модального окна */
    body?: ReactNode;

    /** Пропсы передаваемые напрямую компоненту ModalHeader */
    HeaderProps?: Partial<HeaderBlockProps>;

    /** Пропсы передаваемые напрямую компоненту ModalFooter */
    FooterProps?: Partial<FooterBlockProps>;

    /** Пропсы передаваемые напрямую компоненту OverScreen */
    OverScreenProps?: Partial<OverScreenProps>;
}

export type ModalProps = ComponentPropsWithHTML<ModalPropsWithoutHTML>

export * from './styles/types';
