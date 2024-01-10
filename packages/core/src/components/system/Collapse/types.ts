import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML, Orientation, TransitionProps, WithClassesAndStyles } from '@core';
import { CollapseStyleKeys } from './styles';

export type CollapseOrientation = Orientation;

export interface CollapsePropsWithoutHtml extends
    BaseProps,
    WithClassesAndStyles<CollapseStyleKeys>
{
    /** ReactNode, который должен быть свернут */
    children: ReactNode;

    /** Флаг, отвечающий за, то развёрнут ли элемент */
    open: boolean;

    /** Временные функции появления и исчезновения
     *
     * @default {
     *             enter: easeInOut,
     *             exit: easeInOut,
     *         } */
    easing?: TransitionProps['easing'];

    /** Направление скрытия/раскрытия
     *
     * @default vertical */
    orientation?: CollapseOrientation;

    /** Длительность анимации
     *
     * @default 200 */
    timeout?: TransitionProps['timeout'];

    /** Ширина (при orientation = horizontal) или высота (при orientation = vertical) контейнера,
     * когда он свёрнут
     *
     * @default 0 */
    collapsedSize?: number | string;

    /** Свойства используемого компонента Transition */
    TransitionProps?: Omit<TransitionProps, 'easing' | 'timeout' | 'children' | 'childrenProps'>;
}

export type CollapseProps = ComponentPropsWithHTML<CollapsePropsWithoutHtml>;
