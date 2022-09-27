import { ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML } from '@core/types';
import { WithClassesAndStyles } from '@core/styles';
import { ButtonStyleParams } from '@core/src';
import { BaseButtonStyleKeys } from './style';

export interface BaseButtonPropsWithoutHtml extends
    Partial<ButtonStyleParams>,
    WithClassesAndStyles<BaseButtonStyleKeys, ButtonStyleParams>,
    BaseProps<HTMLButtonElement>
{
    /** HTML-тип элемента button */
    buttonType?: 'submit' | 'reset' | 'button';

    /** Текст расположенный в компоненте */
    children?: ReactNode,
}

export type BaseButtonProps = ComponentPropsWithHTML<BaseButtonPropsWithoutHtml, 'button'>;
