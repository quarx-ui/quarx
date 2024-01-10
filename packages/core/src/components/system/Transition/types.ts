import { CSSProperties, FC, ReactElement, RefAttributes } from 'react';
import { CSSTransitionProps as ReactTransitionProps } from 'react-transition-group/CSSTransition';
import { TransitionStatus } from 'react-transition-group';
import { Theme } from '@core';

export interface TransitionEasing {
    /** Функция синхронизации для входа
     *
     * @default theme.transitions.easing.easeInOut */
    enter?: string;

    /** Функция синхронизации для выхода
     *
     * @default theme.transitions.easing.easeInOut */
    exit?: string;
}

export interface TransitionTimout {
    /** Продолжительность при первом монтировании
     *
     * @default 'enter' value */
    appear?: number;

    /** Продолжительность при монтировании
     *
     * @default 0 */
    enter?: number;

    /** Продолжительность при демонтировании
     *
     * @default 0 */
    exit?: number;
}

export interface ComponentProps {
    /** Функция синхронизации */
    easing: string | TransitionEasing | undefined;

    /** CSS стили */
    style?: CSSProperties;

    /** Продолжительность перехода в миллисекундах */
    timeout: number | Omit<TransitionTimout, 'appear'>;
}

export interface Options {
    /** Режим анимации (вход или выход) */
    mode: 'enter' | 'exit';
}

export interface TransitionOptions {
    /** Продолжительность перехода */
    duration: string | number;

    /** Функция синхронизации */
    easing: string | undefined;

    /** Задержка перехода */
    delay: string | undefined;
}

export type TransitionCallback = ReactTransitionProps['onEnter'] | ReactTransitionProps['onExit'];

export type MapTransitionStatusToStyles = Partial<Record<TransitionStatus, CSSProperties>>;

export interface TransitionPropsWithoutTransitionProps<Props extends object, T extends HTMLElement> {
    /** Дочерний компонент, в который будет передан текущий статус
     * перехода ('entering', 'entered', 'exiting', 'exited') */
    children: ReactElement & RefAttributes<T>;

    /** По умолчанию дочерний компонент не выполняет переход enter
     * при первом монтировании, независимо от значения in.
     * Если необходимо достичь подобного поведения,
     * установите для параметров appear и in значение true.
     *
     * @default false */
    appear?: boolean;

    /** Функции css синхронизации
     *
     * @default { enter: (theme)easeInOut, exit: (theme)easeInOut } */
    easing?: TransitionEasing;

    /** Стили по умолчанию
     *
     * @default defaultStyles */
    styles?: CSSProperties | ((theme: Theme) => CSSProperties);

    /** CSS логика переходов с учетом статуса
     * (entering, entered, exiting, exited)
     *
     * @default defaultMapStatusToStyles */
    mapStatusToStyles?: MapTransitionStatusToStyles | ((theme: Theme) => MapTransitionStatusToStyles);

    /** Видимость компонента. Запускает состояния входа или выхода
     *
     * @default false */
    in?: boolean;

    /** Свойства timeout transition
     *
     * @default opacity */
    timeoutProperty?: string | string[];

    /** Продолжительность перехода в миллисекундах.
     * Требуется, если не указан addEndListener. */
    timeout?: TransitionTimout | number;

    /** Компонент для реализации переходов
     *
     * @default ReactTransition */
    transitionComponent?: FC<ReactTransitionProps>;

    /** Настраиваемый триггер окончания перехода.
     * Вызывается с переходным узлом DOM и обратным вызовом done.
     * Позволяет использовать более детализированную логику окончания перехода.
     * Timeouts используются в качестве запасного варианта,
     * если они установлены */
    addEndListener?: ReactTransitionProps['addEndListener'];

    /** Callback срабатывает до применения статуса «entering».
     * Дополнительный параметр isAppearing указывает, происходит ли этап
     * ввода при начальном монтировании */
    onEnter?: ReactTransitionProps['onEnter'];

    /** Callback срабатывает после применения статуса «entered».
     * Дополнительный параметр isAppearing указывает,
     * происходит ли этап ввода при начальном монтировании. */
    onEntered?: ReactTransitionProps['onEntered'];

    /** Обратный вызов срабатывает после применения статуса «entering».
     * Дополнительный параметр isAppearing указывает,
     * происходит ли этап ввода при начальном монтировании */
    onEntering?: ReactTransitionProps['onEntering'];

    /** Callback срабатывает
     * до применения статуса «exiting» */
    onExit?: ReactTransitionProps['onExit'];

    /** Callback срабатывает после применения статуса «exited». */
    onExited?: ReactTransitionProps['onExited'];

    /** Callback срабатывает после применения статуса «exiting». */
    onExiting?: ReactTransitionProps['onExiting'];

    /** Дочерние свойства */
    childrenProps?: Partial<Props>;
}

export type TransitionProps<Props extends object = object, T extends HTMLElement = HTMLDivElement> =
    TransitionPropsWithoutTransitionProps<Props, T>
    & Omit<ReactTransitionProps<T>, keyof TransitionPropsWithoutTransitionProps<Props, T>>;
