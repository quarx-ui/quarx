import { BaseModalProps, ComponentPropsWithHTML, IconButtonProps, WithClassesAndStyles } from '@core';
import { MouseEventHandler, ReactNode } from 'react';
import { ModalHeaderStyleParams, ModalHeaderStyleKeys } from './styles';

export interface ModalHeaderPropsWithoutHtml extends
    Partial<ModalHeaderStyleParams>,
    BaseModalProps,
    WithClassesAndStyles<ModalHeaderStyleKeys, ModalHeaderStyleParams>
{
    /** Заголовок */
    title?: ReactNode,

    /** Подзаголовок */
    subTitle?: ReactNode,

    /** Отключить кнопку закрытия */
    disableCloseButton?: boolean,

    /** Пропсы передаваемые напрямую кнопке закрытия */
    CloseButtonProps?: Partial<IconButtonProps>,

    /** Обработчик события клика по кнопке закрытия */
    onClose?: MouseEventHandler<HTMLButtonElement>,

    /** Пользовательская кнопка закрытия */
    CloseButton?: ReactNode,
}

export type ModalHeaderProps = ComponentPropsWithHTML<ModalHeaderPropsWithoutHtml>
export * from './styles/types';
