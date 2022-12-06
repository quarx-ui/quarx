import React from 'react';
import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
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

    children: React.ReactElement | undefined; // TODO: ReactElement<CheckboxGroup | RadioButtonGroup>
}

export type SelectionGroupProps = ComponentPropsWithHTML<SelectionGroupPropsWithoutHtml>;
