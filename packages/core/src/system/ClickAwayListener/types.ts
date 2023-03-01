import { Values } from '@core';
import { ReactElement } from 'react';
import {
    CLICK_AWAY_LISTENER_SYNTHETIC_MOUSE_EVENTS,
    CLICK_AWAY_LISTENER_SYNTHETIC_TOUCH_EVENTS,
} from './constants';

export type ClickAwayListenerSyntheticMouseEvents = Values<typeof CLICK_AWAY_LISTENER_SYNTHETIC_MOUSE_EVENTS>;

export type ClickAwayListenerSyntheticTouchEvents = Values<typeof CLICK_AWAY_LISTENER_SYNTHETIC_TOUCH_EVENTS>;

export type ClickAwayListenerEvents =
    | ClickAwayListenerSyntheticMouseEvents
    | ClickAwayListenerSyntheticTouchEvents;

export interface ClickAwayListenerProps {
    /** При включении данного свойства рассматривается только DOM,
     * дерево React`а игнорируется. Данное свойство изменяет обработку портальных элементов.
     *
     * @default false */
    disableReactTree?: boolean;

    /** Прослушиваемое событие мыши. Выключено при false.
     *
     * @default 'onClick' */
    mouseEvent?: ClickAwayListenerSyntheticMouseEvents | false;

    /** Прослушиваемое событие touch. Выключено при false.
     *
     * @default 'onTouchEnd' */
    touchEvent?: ClickAwayListenerSyntheticTouchEvents | false;

    /** Функция, вызываемая при клике вне дочернего компонента */
    onClickAway(event: MouseEvent | TouchEvent): void;

    /** Элемент для прослушивания */
    children: ReactElement;
}
