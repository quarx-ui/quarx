import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { BodyStyleParams } from './styles/types';
import { ActionButtonsProps } from '../ActionButtons/types';
import { BodyStyleKeys } from './styles';

export interface BodyPropsWithoutHtml extends
    BaseProps,
    Partial<BodyStyleParams>,
    WithClassesAndStyles<BodyStyleKeys, BodyStyleParams>,
    Pick<ActionButtonsProps, 'PrimaryButtonProps' | 'SecondaryButtonProps'>
{
    /** Заголовок */
    title?: ReactNode;

    /** Описание */
    description?: ReactNode;

    /** Пропсы передаваемые напрямую компоненту `ActionButtons` */
    ActionButtonProps?: ActionButtonsProps;
}

export type BodyProps = ComponentPropsWithHTML<BodyPropsWithoutHtml>
