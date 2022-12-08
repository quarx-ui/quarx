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

export type OverScreenCloseReason = Values<typeof OVER_SCREEN_CLOSE_REASON>;
export type OverScreenAppearance = Values<typeof OVER_SCREEN_APPEARANCE>;
export type OverScreenOrigin = Values<typeof OVER_SCREEN_ORIGIN>;

export interface OverScreenPropsWithoutHtml extends
    Omit<BaseProps, 'permissions'>,
    Partial<Omit<OverScreenStyleParams, keyof OmittedOverScreenStyleParams>>,
    WithClassesAndStyles<OverScreenStyleKeys, OverScreenStyleParams>,
    Pick<PortalProps, 'disablePortal'>,
    Pick<TransitionProps, 'timeout' | 'easing'>
{
    /** @description Показать/скрыть компонент
     *
     * @default false */
    open?: boolean;

    /** @description Тип анимации
     * @property none Отсутствие анимации
     * @property fade Плавное появление/исчезновение
     * @property slide Выезд из положения `origin`
     *
     * @default fade */
    appearance?: OverScreenAppearance;

    /** @description Сохранять компонент в DOM-дереве
     *
     * @default false */
    keepMounted?: boolean;

    /** @description Возможность закрытия компонента по клику по внешней области
     *
     * @default false */
    disableCloseByClickAway?: boolean;

    /** @description Закрытие по клавише Escape
     *
     * @default false */
    disableCloseByEscape?: boolean;

    /** @description Отключить блокировку скролла
     *
     * @default false */
    disableScrollLock?: boolean;

    /** @description Отключить компонент Backdrop
     *
     * @default false */
    disableBackdrop?: boolean;

    /** @description Обработчик закрытия модального окна
     *
     * @param event Объект события
     * @param reason Причина закрытия */
    onClose?: (event: MouseEvent | TouchEvent, reason: OverScreenCloseReason) => void;

    /** @description Дочерний элемент */
    children: ReactElement & RefAttributes<HTMLDivElement>;

    /** @description Пропсы передаваемые напрямую компоненту Transition */
    TransitionProps?: Partial<TransitionProps>;

    /** @description Пропсы передаваемые напрямую компоненту Backdrop */
    BackdropProps?: Partial<BackdropProps>;

    /** @description Пропсы передаваемые напрямую компоненту Portal */
    PortalProps?: Partial<PortalProps>;

    /** @description Пропсы передаваемые напрямую компоненту DelayedMounter */
    DelayedMounterProps?: Partial<DelayedMounterProps>;

    /** @description Исходное положение компонента относительно `placement`
     * @property top
     * @property bottom
     * @property right
     * @property left
     *
     * @default right */
    origin?: OverScreenOrigin;

    /** @description Величина смещения дочернего элемента в формате строки 'x[, y]' или числа */
    offset?: string | number;
}

export type OverScreenProps = ComponentPropsWithHTML<OverScreenPropsWithoutHtml>;
export * from './styles/types';
