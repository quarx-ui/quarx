import { BaseProps, WithClassesAndStyles, Permissions, ButtonProps, ComponentPropsWithHTML } from '@core';
import { ReactElement } from 'react';
import { ActionButtonsStyleParams, SnackbarActionButtonStyleKeys } from './styles';

export interface SnackbarActionButtonPropsWithoutHtml extends
    BaseProps,
    Permissions,
    Partial<ActionButtonsStyleParams>,
    WithClassesAndStyles<SnackbarActionButtonStyleKeys, ActionButtonsStyleParams>
{
    /** Пользовательский компонент кнопки c типом primary */
    PrimaryButton?: ReactElement;

    /** Пользовательский компонент кнопки c типом secondary */
    SecondaryButton?: ReactElement;

    /** Пропсы передаваемые компоненту `Button` с типом `primary` */
    PrimaryButtonProps?: ButtonProps;

    /** Пропсы передаваемые компоненту `Button` с типом `secondary` */
    SecondaryButtonProps?: ButtonProps;
}

export type SnackbarActionButtonProps = ComponentPropsWithHTML<SnackbarActionButtonPropsWithoutHtml>
