import { CSSProperties, FC, ReactElement, RefAttributes } from 'react';
import { TransitionProps as ReactTransitionProps } from 'react-transition-group/Transition';
import { TransitionStatus } from 'react-transition-group';
import { Theme } from '@core';

export interface TransitionEasing {
    /** @description Функция синхронизации для входа
     *
     * @default theme.transitions.easing.easeInOut */
    enter?: string;

    /** @description Функция синхронизации для выхода
     *
     * @default theme.transitions.easing.easeInOut */
    exit?: string;
}

export interface TransitionTimout {
    /** @description Продолжительность при первом монтировании
     *
     * @default 'enter' value */
    appear?: number;

    /** @description Продолжительность при монтировании
     *
     * @default 0 */
    enter?: number;

    /** @description Продолжительность при демонтировании
     *
     * @default 0 */
    exit?: number;
}

export interface ComponentProps {
    /** @description Функция синхронизации */
    easing: string | TransitionEasing | undefined;

    /** @description CSS стили */
    style?: CSSProperties;

    /** @description Продолжительность перехода в миллисекундах */
    timeout: number | Omit<TransitionTimout, 'appear'>;
}

export interface Options {
    /** @description Режим анимации (вход или выход) */
    mode: 'enter' | 'exit';
}

export interface TransitionOptions {
    /** @description Продолжительность перехода */
    duration: string | number;

    /** @description Функция синхронизации */
    easing: string | undefined;

    /** @description Задержка перехода */
    delay: string | undefined;
}

export type TransitionCallback = ReactTransitionProps['onEnter'] | ReactTransitionProps['onExit'];

export type MapTransitionStatusToStyles = Partial<Record<TransitionStatus, CSSProperties>>;

export interface TransitionPropsWithoutTransitionProps<Props extends object, T extends HTMLElement> {
    /** @description Дочерний компонент, в который будет передан текущий статус
     * перехода ('entering', 'entered', 'exiting', 'exited') */
    children: ReactElement & RefAttributes<T>;

    /** @description По умолчанию дочерний компонент не выполняет переход enter
     * при первом монтировании, независимо от значения in.
     * Если необходимо достичь подобного поведения,
     * установите для параметров appear и in значение true.
     *
     * @default false */
    appear?: boolean;

    /** @description Функции css синхронизации
     *
     * @default { enter: (theme)easeInOut, exit: (theme)easeInOut } */
    easing?: TransitionEasing;

    /** @description Стили по умолчанию
     *
     * @default defaultStyles */
    styles?: CSSProperties | ((theme: Theme) => CSSProperties);

    /** @description CSS логика переходов с учетом статуса
     * (entering, entered, exiting, exited)
     *
     * @default defaultMapStatusToStyles */
    mapStatusToStyles?: MapTransitionStatusToStyles | ((theme: Theme) => MapTransitionStatusToStyles);

    /** @description Видимость компонента. Запускает состояния входа или выхода
     *
     * @default false */
    in?: boolean;

    /** @description Свойства timeout transition
     *
     * @default opacity */
    timeoutProperty?: string | string[];

    /** @description Продолжительность перехода в миллисекундах.
     * Требуется, если не указан addEndListener. */
    timeout?: TransitionTimout | number;

    /** @description Компонент для реализации переходов
     *
     * @default ReactTransition */
    transitionComponent?: FC<ReactTransitionProps>;

    /** @description Настраиваемый триггер окончания перехода.
     * Вызывается с переходным узлом DOM и обратным вызовом done.
     * Позволяет использовать более детализированную логику окончания перехода.
     * Timeouts используются в качестве запасного варианта,
     * если они установлены */
    addEndListener?: ReactTransitionProps['addEndListener'];

    /** @description Callback срабатывает до применения статуса «entering».
     * Дополнительный параметр isAppearing указывает, происходит ли этап
     * ввода при начальном монтировании */
    onEnter?: ReactTransitionProps['onEnter'];

    /** @description Callback срабатывает после применения статуса «entered».
     * Дополнительный параметр isAppearing указывает,
     * происходит ли этап ввода при начальном монтировании. */
    onEntered?: ReactTransitionProps['onEntered'];

    /** @description Обратный вызов срабатывает после применения статуса «entering».
     * Дополнительный параметр isAppearing указывает,
     * происходит ли этап ввода при начальном монтировании */
    onEntering?: ReactTransitionProps['onEntering'];

    /** @description Callback срабатывает
     * до применения статуса «exiting» */
    onExit?: ReactTransitionProps['onExit'];

    /** @description Callback срабатывает после применения статуса «exited». */
    onExited?: ReactTransitionProps['onExited'];

    /** @description Callback срабатывает после применения статуса «exiting». */
    onExiting?: ReactTransitionProps['onExiting'];

    /** @description Дочерние свойства */
    childrenProps?: Partial<Props>;
}

export type TransitionProps<Props extends object = object, T extends HTMLElement = HTMLDivElement> =
    TransitionPropsWithoutTransitionProps<Props, T>
    & Omit<ReactTransitionProps<T>, keyof TransitionPropsWithoutTransitionProps<Props, T>>;
