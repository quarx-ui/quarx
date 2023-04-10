import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML, SnackbarStyleParams, WithClassesAndStyles } from '@core';
import { SnackbarActionButtonProps } from '../ActionButtons/types';
import { SnackbarBodyStyleKeys } from './styles';

export interface SnackbarBodyPropsWithoutHtml extends
    BaseProps,
    Partial<SnackbarStyleParams>,
    WithClassesAndStyles<SnackbarBodyStyleKeys, SnackbarStyleParams>,
    Pick<SnackbarActionButtonProps, 'PrimaryButtonProps' | 'SecondaryButtonProps'>
{
    /** Заголовок */
    title?: ReactNode;
    /** Описание */
    description?: ReactNode;
    /** Пропсы передаваемые напрямую компоненту `ActionButtons` */
    ActionButtonProps?: SnackbarActionButtonProps;
}

export type SnackbarBodyProps = ComponentPropsWithHTML<SnackbarBodyPropsWithoutHtml>
