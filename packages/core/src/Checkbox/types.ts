import { WithClassesAndStyles } from '@core/emotion-styles/types';
import { BaseProps } from '@core/types';
import { ChangeEventHandler, RefObject } from 'react';
import { SelectionProps } from '@core/src';
import { SelectionBorderRadius, SelectionSize } from '@core/src/Selection/types';
import { CheckboxStyleKeys } from './style';

export interface CheckboxStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Наличие ошибки */
    hasError?: boolean

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
    WithClassesAndStyles<CheckboxStyleKeys>,
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
