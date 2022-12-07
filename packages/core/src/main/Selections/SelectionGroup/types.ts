import React from 'react';
import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { SelectionGroupStyleKeys } from './styles';
import { SelectionGroupStyleParams } from './styles/types';

export interface SelectionGroupPropsWithoutHtml extends
    BaseProps,
    Partial<SelectionGroupStyleParams>,
    WithClassesAndStyles<SelectionGroupStyleKeys, SelectionGroupStyleParams>
{
    /** @description Заголовок компонента */
    title?: string;

    /** @description Описание компонента */
    description?: string;

    /** @description Вспомогательный текст снизу */
    helperText?: string;

    /** @description Дерево элементов */
    children: React.ReactElement | undefined; // TODO: ReactElement<CheckboxGroup | RadioButtonGroup>
}

export type SelectionGroupProps = ComponentPropsWithHTML<SelectionGroupPropsWithoutHtml>;
