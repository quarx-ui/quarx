import React, { ReactElement } from 'react';
import {
    BackdropProps,
    BaseProps,
    ClickAwayListenerProps,
    ComponentPropsWithHTML,
    TransitionProps,
    UseFloatingProps,
    WithClassesAndStyles,
} from '@core';
import { PopupStyleParams, OmittedPopupStyleParams } from './styles/types';
import { PopupStyleKeys } from './styles';

export interface PopupPropsWithoutHtml extends
    BaseProps,
    Omit<Partial<PopupStyleParams>, keyof OmittedPopupStyleParams>,
    WithClassesAndStyles<PopupStyleKeys, Omit<Partial<PopupStyleParams>, keyof OmittedPopupStyleParams>>,
    Omit<UseFloatingProps, 'floatingRef' | 'arrangement'>
{
    /** Анимация Paper */
    TransitionProps?: Partial<Omit<TransitionProps, 'children'>>;

    /** Отключение анимаций Paper
     *
     * @default false */
    disableTransition?: boolean;

    /** Функция, вызываемая при клике вне popup */
    onClickAway(event: MouseEvent | TouchEvent): void;

    /** Параметры, передаваемые ClickAwayListener компоненту */
    ClickAwayListenerProps?: Omit<ClickAwayListenerProps, 'children' | 'onClickAway'>;

    /** Отключить портал
     *
     * @default false */
    disablePortal?: boolean;

    /** Контейнер, где Portal расположит Backdrop | Paper
     *
     * @default body при enabled portal */
    container?: ReactElement;

    /** Параметры, передаваемые Backdrop компоненту */
    BackdropProps?: BackdropProps;

    /** Дочерние элементы popup */
    children: React.ReactNode | React.ReactNode[];
}

export type PopupProps = ComponentPropsWithHTML<PopupPropsWithoutHtml>;
