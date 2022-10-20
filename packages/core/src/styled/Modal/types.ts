import {
    BackdropProps, BaseModalProps,
    BaseProps,
    ComponentPropsWithHTML,
    ModalFooterProps,
    ModalHeaderProps, OmittedModalStyleParams,
    PortalProps,
    TransitionProps,
} from '@core';
import { WithClassesAndStyles } from '@core/styles';
import { MouseEvent, ReactNode } from 'react';
import { ModalStyleParams, ModalStyleKeys, ModalCSSVarKeys } from './styles';

export type ModalCloseReason = 'clickAway' | 'escape' | 'closeButton'

export interface ModalPropsWithoutHTML extends
    Omit<BaseProps, 'permissions'>,
    Omit<Partial<ModalStyleParams>, keyof OmittedModalStyleParams>,
    BaseModalProps,
    WithClassesAndStyles<ModalStyleKeys, ModalStyleParams, ModalCSSVarKeys>,
    Pick<ModalHeaderProps, 'title' | 'subTitle' | 'disableCloseButton' | 'CloseButtonProps'>,
    Pick<ModalFooterProps, 'direction'>,
    Pick<PortalProps, 'disablePortal'>
{
    /** Объект для настройки кнопок с дефолтным расположением */
    footerButtons?: ModalFooterProps['buttons'],

    /** Элемент используемый в Footer, при передаче которого будут заменены все остальные элементы */
    footer?: ModalFooterProps['children'],

    /** Элемент используемый в Header, при передаче которого будут заменены все остальные элементы */
    header?: ModalHeaderProps['children'],

    /** Тело модального окна */
    body?: ReactNode,

    /** Обработчик закрытия модального окна
     * @param event Объект события
     * @param reason Причина закрытия */
    onClose?: (event: MouseEvent<HTMLElement>, reason: ModalCloseReason) => void,

    /** Необходимость закрытия компонента по клику по внешней области */
    closeByClickAway?: boolean,

    /** Пропсы передаваемые напрямую компоненту Portal */
    PortalProps?: Partial<PortalProps>,

    /** Пропсы передаваемые напрямую компоненту ModalHeader */
    HeaderProps?: Partial<ModalHeaderProps>,

    /** Пропсы передаваемые напрямую компоненту ModalFooter */
    FooterProps?: Partial<ModalFooterProps>,

    /** Пропсы передаваемые напрямую компоненту Backdrop */
    BackdropProps?: Partial<BackdropProps>,

    /** Пропсы передаваемые напрямую компоненту Transition */
    TransitionProps?: Partial<TransitionProps>,

    /** Показать/скрыть компонент */
    open?: boolean,

    /** Сохранять компонент в DOM-дереве */
    keepMounted?: boolean,

    /** Закрытие по клавише Escape */
    closeByEscape?: boolean,

    /** Отключить анимацию */
    disableTransition?: boolean,

    /** Отключить блокировку скролла */
    disableScrollLock?: boolean,

    /** Отключить компонент Backdrop */
    disableBackdrop?: boolean,
}

export type ModalProps = ComponentPropsWithHTML<ModalPropsWithoutHTML>

export * from './styles/types';
