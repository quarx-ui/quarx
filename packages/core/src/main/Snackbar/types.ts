import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { UseTimerOptions } from '@core/utils/hooks/useTimer/types';
import { SnackbarCloseButtonProps } from '@core/src/main/Snackbar/elements/CloseButton/types';
import { SnackbarLeftItemProps } from './elements/LeftItem/types';
import { SnackbarBodyProps } from './elements/Body/types';
import { SnackbarActionButtonProps } from './elements/ActionButtons/types';
import { SnackbarStyleKeys, SnackbarStyleParams } from './styles';

export interface SnackbarPropsWithoutHtml extends
    BaseProps,
    WithClassesAndStyles<SnackbarStyleKeys, SnackbarStyleParams>,
    Partial<SnackbarStyleParams>,
    Pick<SnackbarLeftItemProps, 'initialTimerValue'>,
    Pick<SnackbarBodyProps, 'title' | 'description'>,
    Pick<SnackbarActionButtonProps, 'PrimaryButtonProps' | 'SecondaryButtonProps'>,
    Pick<SnackbarCloseButtonProps, 'onClose'>
{
    /** Отключить таймер
     *
     * @default false */
    disableTimer?: boolean;

    /** Приостанавливать таймер при наведении курсора

    @default false */
    pauseOnHover?: boolean;

    /** Элемент расположенный слева.
    Может быть пользовательской иконкой или одним из дефолтных элементов.

    - default: Дефолтная иконка соответствующая заданному свойству `color`
    - timer: Визуализация таймера, по окончанию которого произойдет вызов функции `onClose`
    - false: Элемент отсутствует

    @default default */
    leftItem?: SnackbarLeftItemProps['children'];

    /** Пропсы передаваемые функции таймера */
    TimerProps?: Partial<UseTimerOptions>;

    /** Пропсы передаваемые напрямую компоненту `LeftItem` */
    LeftItemProps?: Partial<SnackbarLeftItemProps>;

    /** Пропсы передаваемые напрямую компоненту `Body` */
    BodyProps?: Partial<SnackbarBodyProps>;

    /** Пропсы передаваемые напрямую компоненту `ActionButtons` */
    ActionButtonProps?: Partial<SnackbarActionButtonProps>;

    /** Пропсы передаваемые напрямую компоненту `CloseButton` */
    CloseButtonProps?: Partial<SnackbarCloseButtonProps>;
}

export type SnackbarProps = ComponentPropsWithHTML<SnackbarPropsWithoutHtml>;
export * from './styles/types';
