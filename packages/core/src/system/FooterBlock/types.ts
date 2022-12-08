import { ButtonProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ReactNode } from 'react';
import {
    FooterBlockStyleKeys,
    FooterBlockStyleParams,
} from './styles';

export type FooterBlockButtons = {
    success?: ButtonProps;
    danger?: ButtonProps;
    secondary?: ButtonProps;
}

export interface FooterBlockPropsWithoutHtml extends
    Partial<FooterBlockStyleParams>,
    WithClassesAndStyles<FooterBlockStyleKeys, FooterBlockStyleParams>
{
    /** Дочерний элемент, при передаче которого будут заменены все остальные элементы */
    children?: ReactNode;

    /** Объект для настройки кнопок с дефолтным расположением */
    buttons?: FooterBlockButtons;
}

export type FooterBlockProps = ComponentPropsWithHTML<FooterBlockPropsWithoutHtml>
export * from './styles/types';
