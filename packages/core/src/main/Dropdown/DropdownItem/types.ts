import {
    BaseProps,
    ComponentPropsWithHTML, DropdownItemType,
    OmittedDropdownItemStyleParams,
    TransitionProps,
    WithClassesAndStyles,
} from '@core';
import { ReactChild } from 'react';
import { DropdownItemStyleParams } from './styles/types';
import { DropdownItemStyleKeys } from './styles';

export interface DropdownItemPropsWithoutHtml extends
    BaseProps<HTMLButtonElement>,
    Partial<Omit<DropdownItemStyleParams, keyof OmittedDropdownItemStyleParams>>,
    WithClassesAndStyles<DropdownItemStyleKeys, Omit<DropdownItemStyleParams, keyof OmittedDropdownItemStyleParams>>
{
    /** Тип компонента
     *
     * @default default */
    type?: DropdownItemType;

    /** Состояние компонента
     *
     * @default false */
    state?: boolean;

    /** Обработчик события изменения состояния */
    onChange?(): void;

    /** Левая иконка */
    leftItem?: ReactChild;

    /** Иконка выбора для компонента типа 'default' */
    activeIcon?: ReactChild;

    /** Анимация появления activeIcon */
    ActiveIconTransitionProps?: TransitionProps;

    /** Заголовок */
    title?: string;

    /** Краткое описание */
    description?: string;

    /** Пользовательский компонент вместо title и description */
    children?: ReactChild;
}

export type DropdownItemProps = ComponentPropsWithHTML<DropdownItemPropsWithoutHtml, 'button'>;
