import { ReactNode } from 'react';
import { BaseProps } from '@core/types';
import { WithClassesAndStyles } from '@core/styles';
import { ButtonStyleParams } from '@core/src';
import { BaseButtonStyleKeys } from './style';

export interface BaseButtonPropsWithoutHtml extends
    ButtonStyleParams,
    WithClassesAndStyles<BaseButtonStyleKeys, ButtonStyleParams>,
    BaseProps<HTMLButtonElement>
{
    /** HTML-тип элемента button */
    buttonType?: 'submit' | 'reset' | 'button';

    /** Текст расположенный в компоненте */
    children?: ReactNode,
}

export type BaseButtonHtmlAttributes = Omit<JSX.IntrinsicElements['button'], keyof BaseButtonPropsWithoutHtml>

export type BaseButtonProps = BaseButtonPropsWithoutHtml & BaseButtonHtmlAttributes;
