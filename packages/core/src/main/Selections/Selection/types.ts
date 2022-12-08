import React, { ReactEventHandler } from 'react';
import {
    BaseProps,
    ComponentPropsWithHTML, PaletteColor, SelectionSize,
    WithClassesAndStyles,
} from '@core';
import {
    SelectionStyleKeys,
    SelectionStyleParams,
} from './styles';

export interface SynchronizableSelectionControllerProps {
    /** @description Цветовая схема компонента */
    color?: PaletteColor;

    /** @description Размер компонента */
    size?: SelectionSize;

    /** @description Возможность отключения компонента */
    disabled?: boolean;
}

/** Указанные свойства будут управвляться Selection компонентом */
export interface SelectionControllerProps extends SynchronizableSelectionControllerProps {
    /** @description Обработчик изменения состояния контроллера */
    onChange?: ReactEventHandler;

    /** @description Возможность отключения focus`а компонента */
    disableFocus?: boolean;

    /** @description Эффект наведения */
    hover?: boolean;
}

export interface SelectionPropsWithoutHtml<T extends SelectionControllerProps = SelectionControllerProps> extends
    BaseProps<HTMLButtonElement>,
    Partial<SelectionStyleParams>,
    WithClassesAndStyles<SelectionStyleKeys, SelectionStyleParams>
{
    /** @description Обработчик изменения состояния контроллера */
    onChange?: ReactEventHandler;

    /** @description Контроллер состояния */
    children: React.ReactElement<T>;

    /** @description Заголовок компонента */
    title?: string;

    /** @description Текст описания */
    description?: string;

    /** @description Вспомогательный текст */
    helperText?: string;

    /** @description Левый элемент */
    leftAdornment?: React.ReactNode;

    /** @description Правый элемент */
    rightAdornment?: React.ReactNode;

    /** @description Отключение управления дочерними свойствами.
     * Значениями свойств onChange, disableFocus, hover
     * управляет Selection. Данное свойство отключит контроль дочерних свойств.
     *
     * @default false */
    disableHandlingChildProps?: boolean;
}

export type SelectionProps<T extends SelectionControllerProps = SelectionControllerProps> = (
    ComponentPropsWithHTML<SelectionPropsWithoutHtml<T>, 'button'>
);
