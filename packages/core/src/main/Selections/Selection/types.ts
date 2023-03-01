import { ReactElement, ReactEventHandler, ReactNode } from 'react';
import {
    BaseProps,
    ComponentPropsWithHTML,
    PaletteColor,
    WithClassesAndStyles,
} from '@core';
import {
    SelectionStyleKeys,
    SelectionStyleParams,
    SelectionSize,
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
    BaseProps<HTMLLabelElement>,
    Partial<SelectionStyleParams>,
    WithClassesAndStyles<SelectionStyleKeys, SelectionStyleParams>
{
    /** Контроллер состояния */
    children: ReactElement<T>;

    /** Заголовок компонента */
    title?: string;

    /** Текст описания */
    description?: string;

    /** Вспомогательный текст */
    helperText?: string;

    /** Левый элемент */
    leftAdornment?: ReactNode;

    /** Правый элемент */
    rightAdornment?: ReactNode;
}

export type SelectionProps<T extends SelectionControllerProps = SelectionControllerProps> = (
    ComponentPropsWithHTML<SelectionPropsWithoutHtml<T>, 'label'>
);
