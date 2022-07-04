import { ChangeEventHandler, RefObject } from 'react';
import { BaseProps, SelectionProps, Values, WithClassesAndStyles } from '@core';
import { SWITCHER_POSITION } from '@core/src/Switcher/constants';
import { SelectionSize } from '@core/src/Selection/types';
import { SwitcherStyleKeys } from './style';

export type SwitcherPositionType = Values<typeof SWITCHER_POSITION>;

export interface SwitcherStyleParams {
    /** Состояние наведения */
    hover?: boolean,

    /** Размер компонента */
    size?: SelectionSize,

    /** Изменяет цвет компонента уведомляя об ошибке */
    hasError?: boolean,

    /** Изменяет состояние компонента на активное/неактивное */
    disabled?: boolean,

    /** Отключение возможности фокуса */
    disableFocus?: boolean,

    /** Позиция переключателя относительно текста */
    position?: SwitcherPositionType,

    /** Состояние компонента */
    checked?: boolean,
}

export interface SwitcherPropsWithoutHtml extends
    SwitcherStyleParams,
    WithClassesAndStyles<SwitcherStyleKeys, SwitcherStyleParams>,
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

export type SwitcherPropsHtmlAttributes = Omit<JSX.IntrinsicElements['label'], keyof SwitcherPropsWithoutHtml>;

export type SwitcherProps = SwitcherPropsWithoutHtml & SwitcherPropsHtmlAttributes;

export interface SwitcherSelectionProps extends
    SelectionProps,
    Pick<SwitcherProps, 'checked'>
{
    /** Объект с параметрами для компонента `switcher` */
    switcherProps?: SwitcherProps,
}
