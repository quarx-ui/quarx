import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML, Values, WithClassesAndStyles } from '@core';
import { SNACKBARS_LEFT_ITEMS } from '@core/src/main/Snackbar/styles';
import { SnackbarSize } from '@core/src/main/Snackbar/elements/types';
import { TimerIconProps } from '../TimerIcon/types';
import { SnackbarLeftItemStyleKeys, SnackbarLeftItemStyleParams } from './styles';

export type SnackbarLeftItems = Values<typeof SNACKBARS_LEFT_ITEMS>;

export interface SnackbarLeftItemPropsWithoutHtml extends
    BaseProps,
    Partial<SnackbarLeftItemStyleParams>,
    WithClassesAndStyles<SnackbarLeftItemStyleKeys, SnackbarLeftItemStyleParams>,
    Pick<TimerIconProps, 'initialTimerValue' | 'timerValue'>
{
    /** Элемент расположенный слева.
     Может быть пользовательской иконкой или одним из дефолтных элементов.

     @property default Дефолтная иконка соответствующая заданному свойству `color`
     @property timer Визуализация таймера, по окончанию которого произойдет вызов функции `onClose`
     @property false Элемент отсутствует

     @default default */
    children: SnackbarLeftItems | ReactNode | false;

    /** Пропсы передаваемые напрямую компоненту `TimerIcon` */
    TimerIconProps?: TimerIconProps;
    size?: SnackbarSize;
}

export type SnackbarLeftItemProps = ComponentPropsWithHTML<SnackbarLeftItemPropsWithoutHtml>
