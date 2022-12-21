import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ReactElement } from 'react';
import { SelectionGroupStyleKeys } from './styles';
import { SelectionGroupStyleParams } from './styles/types';

export interface SelectionGroupPropsWithoutHtml extends
    BaseProps,
    Partial<SelectionGroupStyleParams>,
    WithClassesAndStyles<SelectionGroupStyleKeys, SelectionGroupStyleParams>
{
    /** Заголовок компонента */
    title?: string;

    /** Описание компонента */
    description?: string;

    /** Вспомогательный текст снизу */
    helperText?: string;

    /** Дерево элементов */
    children: ReactElement | undefined; // TODO: ReactElement<CheckboxGroup | RadioButtonGroup>
}

export type SelectionGroupProps = ComponentPropsWithHTML<SelectionGroupPropsWithoutHtml>;
