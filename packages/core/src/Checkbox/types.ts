import { BaseProps, Values } from '@core/types';
import { ChangeEventHandler, RefObject } from 'react';
import { SelectionProps } from '@core/src';
import { SelectionBorderRadius, SelectionSize } from '@core/src/Selection/types';
import { WithClassesAndStyles } from '@core/styles';
import { CHECKBOX_COLOR } from './constants';
import { CheckboxStyleKeys } from './style';

export type CheckboxColor = Values<typeof CHECKBOX_COLOR>;

export interface CheckboxStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Цвет компонента */
    color?: CheckboxColor

    /** Размер компонента */
    size?: SelectionSize,

    /** Скругление компонента */
    borderRadius?: SelectionBorderRadius,

    /** Состояние компонента */
    checked?: boolean,

    /** Отключение возможности фокуса */
    disableFocus?: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled?: boolean,

    /** Состояние неопределенности (неполный выбор) */
    indeterminate?: boolean,
}

export interface CheckboxPropsWithoutHtml extends
    CheckboxStyleParams,
    WithClassesAndStyles<CheckboxStyleKeys, CheckboxStyleParams>,
    BaseProps<HTMLLabelElement>
{
    /** Дочерний элемент */
    children?: string,

    /** Обработчик изменения состояния элемента `input` */
    onChange?: ChangeEventHandler<HTMLInputElement>,

    /** Объект со свойствами для элемента `input` */
    inputProps?: JSX.IntrinsicElements['input'],

    /** Ссылка к элементу `input` */
    inputRef?: RefObject<HTMLInputElement>

    /** Свойство `name` элемента `input` */
    name?: string,

    /** Свойство `value` элемента `input` */
    value?: string,
}

export type CheckboxHtmlAttributes = Omit<JSX.IntrinsicElements['label'], keyof CheckboxPropsWithoutHtml>;

export type CheckboxProps = CheckboxPropsWithoutHtml & CheckboxHtmlAttributes;

export interface CheckboxSelectionProps extends
    SelectionProps,
    Pick<CheckboxProps, 'checked'>
{
    /** Объект с параметрами для компонента `checkbox` */
    checkboxProps?: CheckboxProps,
}
