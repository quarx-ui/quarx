import {
    BaseProps,
    ComponentPropsWithHTML,
    DropdownItemProps, LoaderProps,
    OmittedDropdownItemsGroupStyleParams,
    WithClassesAndStyles,
} from '@core';
import { ReactElement } from 'react';
import { DropdownItemsGroupStyleParams } from './styles/types';
import { DropdownItemsGroupStyleKeys } from './styles';

type ExternalUseDropdownItemsGroupStyleParams = Omit<DropdownItemsGroupStyleParams, keyof OmittedDropdownItemsGroupStyleParams>;
type DropdownGroupChildren = ReactElement<DropdownItemProps> | ReactElement;

export interface DropdownItemsGroupPropsWithoutHtml extends
    BaseProps<HTMLDivElement>,
    Partial<ExternalUseDropdownItemsGroupStyleParams>,
    WithClassesAndStyles<DropdownItemsGroupStyleKeys, ExternalUseDropdownItemsGroupStyleParams>
{
    /** Заголовок компонента */
    title?: string;

    /** Dropdown элементы */
    children: DropdownGroupChildren[];

    /** Анимация загрузки
     *
     * @default false */
    loading?: boolean;

    /** Настройки анимации загрузки */
    LoaderProps?: LoaderProps;
}

export type DropdownItemsGroupProps = ComponentPropsWithHTML<DropdownItemsGroupPropsWithoutHtml>;
