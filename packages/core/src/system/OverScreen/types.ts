import { MouseEvent, ReactElement, RefAttributes } from 'react';
import {
    BackdropProps,
    BaseProps,
    ComponentPropsWithHTML,
    DelayedMounterProps,
    OmittedOverScreenStyleParams,
    PortalProps,
    TransitionProps, Values,
    WithClassesAndStyles,
} from '@core';
import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_CLOSE_REASON, OVER_SCREEN_ORIGIN } from './constants';
import { OverScreenStyleKeys, OverScreenStyleParams } from './styles';

export type OverScreenCloseReason = Values<typeof OVER_SCREEN_CLOSE_REASON>
export type OverScreenAppearance = Values<typeof OVER_SCREEN_APPEARANCE>
export type OverScreenOrigin = Values<typeof OVER_SCREEN_ORIGIN>

export interface OverScreenPropsWithoutHtml extends
    Omit<BaseProps, 'permissions'>,
    Partial<Omit<OverScreenStyleParams, keyof OmittedOverScreenStyleParams>>,
    WithClassesAndStyles<OverScreenStyleKeys, OverScreenStyleParams>,
    Pick<PortalProps, 'disablePortal'>,
    Pick<TransitionProps, 'timeout' | 'easing'>
{
    /** Показать/скрыть компонент */
    open?: boolean,

    /** Тип анимации
     * @property none Отсутствие анимации
     * @property fade Плавное появление/исчезновение
     * @property slide Выезд из положения `origin`
     *
     * @default fade */
    appearance?: OverScreenAppearance,

    /** Сохранять компонент в DOM-дереве */
    keepMounted?: boolean,

    /** Возможность закрытия компонента по клику по внешней области */
    disableCloseByClickAway?: boolean,

    /** Закрытие по клавише Escape */
    disableCloseByEscape?: boolean,

    /** Отключить блокировку скролла */
    disableScrollLock?: boolean,

    /** Отключить компонент Backdrop */
    disableBackdrop?: boolean,

    /** Обработчик закрытия модального окна
     * @param event Объект события
     * @param reason Причина закрытия */
    onClose?: (event: MouseEvent | TouchEvent, reason: OverScreenCloseReason) => void,

    /** Дочерний элемент */
    children: ReactElement & RefAttributes<HTMLDivElement>,

    /** Пропсы передаваемые напрямую компоненту Transition */
    TransitionProps?: Partial<TransitionProps>,

    /** Пропсы передаваемые напрямую компоненту Backdrop */
    BackdropProps?: Partial<BackdropProps>,

    /** Пропсы передаваемые напрямую компоненту Portal */
    PortalProps?: Partial<PortalProps>,

    /** Пропсы передаваемые напрямую компоненту DelayedMounter */
    DelayedMounterProps?: Partial<DelayedMounterProps>

    /** Исходное положение компонента относительно `placement`
     * @property top
     * @property bottom
     * @property right
     * @property left
     *
     * @default right */
    origin?: OverScreenOrigin,

    /** Величина смещения дочернего элемента в формате строки 'x[, y]' или числа */
    offset?: string | number,
}

export type OverScreenProps = ComponentPropsWithHTML<OverScreenPropsWithoutHtml>;
export * from './styles/types';
