import { BaseProps, ComponentPropsWithHTML } from '@core/types';
import { ChangeEventHandler, RefObject } from 'react';
import { WithClassesAndStyles } from '@core/styles';
import { CheckboxStyleKeys, CheckboxStyleParams } from './styles';

export interface CheckboxPropsWithoutHtml extends
    Partial<CheckboxStyleParams>,
    WithClassesAndStyles<CheckboxStyleKeys, CheckboxStyleParams>,
    BaseProps<HTMLLabelElement>
{
    /** @description Дочерний элемент */
    children?: string;

    /** @description Обработчик изменения состояния элемента `input` */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /** @description Объект со свойствами для элемента `input` */
    inputProps?: JSX.IntrinsicElements['input'];

    /** @description Ссылка к элементу `input` */
    inputRef?: RefObject<HTMLInputElement>;

    /** @description Свойство `name` элемента `input` */
    name?: string;

    /** @description Свойство `value` элемента `input` */
    value?: string;
}

export type CheckboxProps = ComponentPropsWithHTML<CheckboxPropsWithoutHtml, 'label'>;

export * from './styles/types';
