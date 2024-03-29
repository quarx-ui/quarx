import {
    BaseProps,
    ComponentPropsWithHTML,
    OmittedDropdownItemStyleParams,
    TransitionProps,
    WithClassesAndStyles,
} from '@core';
import { ReactChild } from 'react';
import { DropdownItemStyleParams } from './styles/types';
import { DropdownItemStyleKeys } from './styles';

interface TextPairEllipsis {
    /** Сокращать троеточием заголовок
     *
     * @default false */
    title?: boolean;

    /** Сокращать троеточием описание
     *
     * @default false */
    description?: boolean;
}

export interface DropdownItemPropsWithoutHtml extends
    BaseProps<HTMLButtonElement>,
    Partial<Omit<DropdownItemStyleParams, keyof OmittedDropdownItemStyleParams>>,
    WithClassesAndStyles<DropdownItemStyleKeys, DropdownItemStyleParams>
{
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

    /** Сокращения текста */
    ellipsis?: boolean | TextPairEllipsis;

    /** Пользовательский компонент вместо title и description */
    children?: ReactChild;
}

export type DropdownItemProps = ComponentPropsWithHTML<DropdownItemPropsWithoutHtml, 'button'>;
