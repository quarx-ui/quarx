import { BaseModalProps, ButtonProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import {
    ModalFooterStyleKeys,
    ModalFooterStyleParams,
} from './styles';

export type ModalFooterButtons = {
    success?: ButtonProps,
    danger?: ButtonProps,
    secondary?: ButtonProps
}

export interface ModalFooterPropsWithoutHtml extends
    Partial<ModalFooterStyleParams>,
    BaseModalProps,
    WithClassesAndStyles<ModalFooterStyleKeys, ModalFooterStyleParams>
{
    /** Объект для настройки кнопок с дефолтным расположением */
    buttons?: ModalFooterButtons
}

export type ModalFooterProps = ComponentPropsWithHTML<ModalFooterPropsWithoutHtml>
export * from './styles/types';
