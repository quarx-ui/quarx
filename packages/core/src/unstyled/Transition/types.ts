import { CSSProperties, FC, ReactElement, RefAttributes } from 'react';
import { TransitionProps as ReactTransitionProps } from 'react-transition-group/Transition';
import { TransitionStatus } from 'react-transition-group';
import { Theme } from '@core';

export interface TransitionEasing {
    enter?: string,
    exit?: string,
}

export interface TransitionTimout {
    appear?: number,
    enter?: number,
    exit?: number,
}

export interface ComponentProps {
    easing: string | TransitionEasing | undefined,
    style?: CSSProperties,
    timeout: number | Omit<TransitionTimout, 'appear'>,
}

export interface Options {
    mode: 'enter' | 'exit',
}

export interface TransitionOptions {
    duration: string | number,
    easing: string | undefined,
    delay: string | undefined,
}

export type TransitionCallback = ReactTransitionProps['onEnter'] | ReactTransitionProps['onExit'];

export type MapTransitionStatusToStyles = Partial<Record<TransitionStatus, CSSProperties>>

export interface TransitionPropsWithoutTransitionProps<T extends HTMLElement> {
    children: ReactElement & RefAttributes<T>, // todo jsdoc
    appear?: boolean,
    easing?: TransitionEasing,
    styles?: CSSProperties | ((theme: Theme) => CSSProperties),
    mapStatusToStyles?: MapTransitionStatusToStyles | ((theme: Theme) => MapTransitionStatusToStyles),
    in?: boolean,
    timeout?: TransitionTimout,
    transitionComponent?: FC<ReactTransitionProps>,
    addEndListener?: ReactTransitionProps['addEndListener'],
    onEnter?: ReactTransitionProps['onEnter'],
    onEntered?: ReactTransitionProps['onEntered'],
    onEntering?: ReactTransitionProps['onEntering'],
    onExit?: ReactTransitionProps['onExit'],
    onExited?: ReactTransitionProps['onExited'],
    onExiting?: ReactTransitionProps['onExiting'],
}

export type TransitionProps<T extends HTMLElement = HTMLDivElement> =
    TransitionPropsWithoutTransitionProps<T>
    & Omit<ReactTransitionProps<T>, keyof TransitionPropsWithoutTransitionProps<T>>