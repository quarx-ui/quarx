import { ChangeEventHandler, ReactNode, RefObject } from 'react';
import { WithClassesAndStyles } from '@core';
import { BaseProps } from '@core/types';
import { SelectionProps } from '@core/src';
import { SelectionSize } from '@core/src/Selection/types';
import { RadioButtonStyleKeys } from './style';

export interface RadioButtonStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Состояние компонента */
    checked?: boolean,

    /** Наличие ошибки */
    hasError?: boolean,

    /** Размер компонента */
    size?: SelectionSize,

    /** Отключение возможности фокуса */
    disableFocus?: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled?: boolean,
}

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

export type RadioButtonHtmlAttributes = Omit<JSX.IntrinsicElements['label'], keyof RadioButtonPropsWithoutHtml>
export type RadioButtonProps = RadioButtonPropsWithoutHtml & RadioButtonHtmlAttributes;

export interface RadioButtonSelectionProps extends
    SelectionProps,
    Pick<RadioButtonProps, 'checked'>
{
    /** Объект с параметрами для компонента `checkbox` */
    radioButtonProps?: RadioButtonProps,
}
