import { ChangeEventHandler, ReactNode, RefObject } from 'react';
import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { BaseProps } from '@core/types';
import { SelectionProps } from '@core/src';
import { RadioButtonStyleKeys, RadioButtonStyleParams } from './styles';

export interface RadioButtonPropsWithoutHtml extends
    RadioButtonStyleParams,
    WithClassesAndStyles<RadioButtonStyleKeys, RadioButtonStyleParams>,
    BaseProps<HTMLLabelElement>
{
    /** Дочерний элемент */
    children?: ReactNode,

    /** Объект со свойствами для элемента `input` */
    inputProps?: JSX.IntrinsicElements['input'],

    /** Ссылка к элементу `input` */
    inputRef?: RefObject<HTMLInputElement>,

    /** Обработчик изменения состояния элемента `input` */
    onChange?: ChangeEventHandler<HTMLInputElement>,

    /** Свойство `name` элемента `input` */
    name?: string,

    /** Свойство `value` элемента `input` */
    value?: string,
}

export type RadioButtonProps = ComponentPropsWithHTML<RadioButtonPropsWithoutHtml, 'label'>;

export interface RadioButtonSelectionProps extends
    SelectionProps,
    Pick<RadioButtonProps, 'checked'>
{
    /** Объект с параметрами для компонента `checkbox` */
    radioButtonProps?: RadioButtonProps,
}

export * from './styles/types';
