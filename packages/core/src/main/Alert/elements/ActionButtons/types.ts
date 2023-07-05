import { BaseProps, WithClassesAndStyles, Permissions, ButtonProps, ComponentPropsWithHTML } from '@core';
import { ReactElement } from 'react';
import { ElementTypes } from '@core/src/main/Alert/elements';
import { ActionButtonStyleKeys } from './styles';
import { ActionButtonsStyleParams } from './styles/types';

export interface ActionButtonsPropsWithoutHtml extends
    BaseProps,
    Permissions,
    Partial<Pick<ElementTypes, 'size'>>,
    Partial<ActionButtonsStyleParams>,
    WithClassesAndStyles<ActionButtonStyleKeys, ActionButtonsStyleParams>
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

export type ActionButtonsProps = ComponentPropsWithHTML<ActionButtonsPropsWithoutHtml>
