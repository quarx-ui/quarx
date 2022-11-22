import { BaseProps, ComponentPropsWithHTML } from '@core/types';
import { ChangeEventHandler, RefObject } from 'react';
import { WithClassesAndStyles } from '@core/styles';
import { CheckboxStyleKeys, CheckboxStyleParams } from './styles';

export interface CheckboxPropsWithoutHtml extends
    Partial<CheckboxStyleParams>,
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

export type CheckboxProps = ComponentPropsWithHTML<CheckboxPropsWithoutHtml, 'label'>;

export * from './styles/types';
