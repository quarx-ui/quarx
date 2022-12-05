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
    /** Цветовая схема компонента */
    color?: PaletteColor;

    /** Размер компонента */
    size?: SelectionSize;

    /** Возможность отключения компонента */
    disabled?: boolean;
}

/** Указанные свойства будут управвляться Selection компонентом */
export interface SelectionControllerProps extends SynchronizableSelectionControllerProps {
    /** Обработчик изменения состояния контроллера */
    onChange?: ReactEventHandler;

    /** Возможность отключения focus`а компонента */
    disableFocus?: boolean;

    /** Эффект наведения */
    hover?: boolean;
}

export interface SelectionPropsWithoutHtml<T extends SelectionControllerProps = SelectionControllerProps> extends
    BaseProps<HTMLButtonElement>,
    Partial<SelectionStyleParams>,
    WithClassesAndStyles<SelectionStyleKeys, SelectionStyleParams>
{
    /** Обработчик изменения состояния контроллера */
    onChange?: ReactEventHandler;

    /** Контроллер состояния */
    children: React.ReactElement<T>;

    /** Заголовок компонента */
    title?: string;

    /** Текст описания */
    description?: string;

    /** Вспомогательный текст */
    helperText?: string;

    /** Левый элемент */
    leftAdornment?: React.ReactNode;

    /** Правый элемент */
    rightAdornment?: React.ReactNode;

    /**
     * Отключение управления дочерними свойствами.
     * Значениями свойств onChange, disableFocus, hover
     * управляет Selection. Данное свойство отключит контроль дочерних свойств.
     * */
    disableHandlingChildProps?: boolean;
}

export type SelectionProps<T extends SelectionControllerProps = SelectionControllerProps> = (
    ComponentPropsWithHTML<SelectionPropsWithoutHtml<T>, 'button'>
);
