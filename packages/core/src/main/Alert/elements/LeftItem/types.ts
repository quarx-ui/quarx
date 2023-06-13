import { ReactNode } from 'react';
import {
    BaseProps,
    ComponentPropsWithHTML,
    WithClassesAndStyles,
} from '@core';
import { ElementTypes } from '../types';
import { LeftItemStyleKeys } from './styles';
import { LeftItemStyleParams } from './styles/types';

export type AlertLeftItems = 'default' | ReactNode | false

export interface LeftItemPropsWithoutHtml extends
    BaseProps,
    Partial<LeftItemStyleParams>,
    WithClassesAndStyles<LeftItemStyleKeys, LeftItemStyleParams>,
    Partial<Pick<ElementTypes, 'size'>>
{
    /** Элемент расположенный слева.
    * Может быть пользовательским или одним из дефолтных элементов.
    *
    * - **default** - Дефолтная иконка соответствующая заданному свойству `color`
    * - **false** - Элемент отсутствует
    *
    * @default default */
    children: AlertLeftItems;
}

export type LeftItemProps = ComponentPropsWithHTML<LeftItemPropsWithoutHtml>
