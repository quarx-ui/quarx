import { BaseProps, ComponentPropsWithHTML, IconButtonProps, Values, WithClassesAndStyles } from '@core';
import { SNACKBAR_CLOSE_REASON } from '@core/src/main/Snackbar/constants';
import { ReactElement } from 'react';
import { SnackbarSize } from '@core/src/main/Snackbar/elements/types';
import { SnackbarCloseButtonStyleKeys } from './styles';

export type SnackbarCloseReason = Values<typeof SNACKBAR_CLOSE_REASON>

export interface SnackbarCloseButtonPropsWithoutHtml extends
    BaseProps,
    WithClassesAndStyles<SnackbarCloseButtonStyleKeys>
{
    /** Пропсы передаваемые напрямую компоненту `IconButton` */
    IconButtonProps?: IconButtonProps;

    /** Пользовательский компонент кнопки */
    Button?: ReactElement;

    /** Обработчик закрытия компонента.
        Вызывается при клике по иноке закрытия либо при истечении таймера */
    onClose?: (reason: SnackbarCloseReason) => void;
}

export type SnackbarCloseButtonProps = ComponentPropsWithHTML<SnackbarCloseButtonPropsWithoutHtml>
