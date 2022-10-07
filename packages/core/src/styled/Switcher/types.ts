import { ChangeEventHandler, RefObject } from 'react';
import { BaseProps, ComponentPropsWithHTML, SelectionProps, WithClassesAndStyles } from '@core';
import { SwitcherStyleParams } from '@quarx-ui/core/src/styled/Switcher/styles/types';
import { SwitcherCSSVarKeys, SwitcherStyleKeys } from './styles';

export interface SwitcherPropsWithoutHtml extends
    Partial<SwitcherStyleParams>,
    WithClassesAndStyles<SwitcherStyleKeys, SwitcherStyleParams, SwitcherCSSVarKeys>,
    BaseProps<HTMLLabelElement>
{
    /** Обработчик изменения состояния элемента `input` */
    onChange?: ChangeEventHandler<HTMLInputElement>,

    /** Свойство `name` элемента `input` */
    name?: string

    /** Свойство `value` элемента `input` */
    value?: string,

    /** Объект со свойствами для элемента `input` */
    inputProps?: JSX.IntrinsicElements['input'],

    /** Ссылка к элементу `input` */
    inputRef?: RefObject<HTMLInputElement>,
}

export type SwitcherProps = ComponentPropsWithHTML<SwitcherPropsWithoutHtml, 'label'>

export interface SwitcherSelectionProps extends
    SelectionProps,
    Pick<SwitcherProps, 'checked'>
{
    /** Объект с параметрами для компонента `switcher` */
    switcherProps?: SwitcherProps,
}

export * from './styles/types';
