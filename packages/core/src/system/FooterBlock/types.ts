import { ButtonProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ReactNode } from 'react';
import {
    FooterBlockStyleKeys,
    FooterBlockStyleParams,
} from './styles';

export type FooterBlockButtons = {
    /** @description Свойства кнопки успешной операции */
    success?: ButtonProps;

    /** @description Свойства кнопки ошибки */
    danger?: ButtonProps;

    /** @description Свойства кнопки */
    secondary?: ButtonProps;
}

export interface FooterBlockPropsWithoutHtml extends
    Partial<FooterBlockStyleParams>,
    WithClassesAndStyles<FooterBlockStyleKeys, FooterBlockStyleParams>
{
    /** @description Дочерний элемент, при передаче которого будут заменены все остальные элементы */
    children?: ReactNode;

    /** @description Объект для настройки кнопок с дефолтным расположением */
    buttons?: FooterBlockButtons;
}

export type FooterBlockProps = ComponentPropsWithHTML<FooterBlockPropsWithoutHtml>;
export * from './styles/types';
