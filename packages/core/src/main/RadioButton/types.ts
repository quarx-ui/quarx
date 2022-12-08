import { ChangeEventHandler, ReactNode, RefObject } from 'react';
import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { BaseProps } from '@core/types';
import { RadioButtonCSSVarKeys, RadioButtonStyleKeys, RadioButtonStyleParams } from './styles';

export interface RadioButtonPropsWithoutHtml extends
    Partial<RadioButtonStyleParams>,
    WithClassesAndStyles<RadioButtonStyleKeys, RadioButtonStyleParams, RadioButtonCSSVarKeys>,
    BaseProps<HTMLLabelElement>
{
    /** @description Дочерний элемент */
    children?: ReactNode;

    /** @description Объект со свойствами для элемента `input` */
    inputProps?: JSX.IntrinsicElements['input'];

    /** @description Ссылка к элементу `input` */
    inputRef?: RefObject<HTMLInputElement>;

    /** @description Обработчик изменения состояния элемента `input` */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /** @description Свойство `name` элемента `input` */
    name?: string;

    /** @description Свойство `value` элемента `input` */
    value?: string;
}

export type RadioButtonProps = ComponentPropsWithHTML<RadioButtonPropsWithoutHtml, 'label'>;

export * from './styles/types';
