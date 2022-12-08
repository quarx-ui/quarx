import {
    ChangeEventHandler,
    ReactElement,
    ReactNode, Ref,
} from 'react';
import { BaseProps, ComponentPropsWithHTML } from '@core/types';
import { WithClassesAndStyles } from '@core/styles';
import {
    BaseTextFieldStyleParams,
    OmittedFieldStyleParams,
    TextFieldCSSVarKeys,
    TextFieldStyleKeys,
    TextFieldStyleParams,
} from './styles';

export type TextFieldRefType = HTMLInputElement | HTMLTextAreaElement;

export interface BaseTextFieldProps extends
    Partial<BaseTextFieldStyleParams>,
    Omit<BaseProps<TextFieldRefType>, 'permissions'>
{
    /** @description Максимальное количество символов */
    maxLength?: number;

    /** @description Обязательное поле
     *
     * @default false */
    required?: boolean;

    /** @description Текст-заполнитель */
    placeholder?: string;

    /** @description Наименование поля ввода */
    name?: string;

    /** @description Дефолтное Значение поля */
    defaultValue?: string;

    /** @description Значение поля */
    value?: string;

    /** @description Количество строк в textarea */
    rows?: number;

    /** @description Минимальное количество строк в textarea */
    minRows?: number;

    /** @description Максимальное количество строк в textarea */
    maxRows?: number;

    /** @description Ссылка к HTML-элементу input */
    inputRef?: Ref<TextFieldRefType>;

    /** @description Объект со свойствами текстового поля */
    inputProps?: Omit<JSX.IntrinsicElements['input'] & JSX.IntrinsicElements['textarea'], 'value' & { value?: string }>;

    /** @description Обработчик события изменения поля ввода */
    onChange?: ChangeEventHandler<TextFieldRefType>;
}

export interface TextFieldPropsWithoutHtml extends
    Omit<Partial<TextFieldStyleParams>, keyof OmittedFieldStyleParams>,
    Omit<BaseTextFieldProps, 'className' | 'ref'>,
    WithClassesAndStyles<TextFieldStyleKeys, TextFieldStyleParams & BaseTextFieldStyleParams, TextFieldCSSVarKeys>,
    BaseProps
{
    /** @description Заголовок поля */
    label?: string | ReactNode;

    /** @description Скрытие компонента. Удаляет со страницы
     *
     * @default false */
    hidden?: boolean;

    /** @description Включает автофокус при инициализации компонента
     *
     * @default false */
    autoFocus?: boolean;

    /** @description Разрешить переполнение текстового поля
     *
     * @default true */
    overflow?: boolean;

    /** @description Счетчик символов */
    counter?: boolean;

    /** @description Текст ошибки */
    errorText?: string;

    /** @description Объект с текстами ошибок */
    internalErrors?: {
        maxLength?: string;
        required?: string;
    };

    /** @description Подсказка */
    helperText?: string;

    /** @description Обработчик события очистки поля */
    onClear?: (value: string) => void;

    /** @description Правый элемент поля */
    rightItem?: ReactElement;

    /** @description Левый элемент поля */
    leftItem?: ReactElement;

    /** @description Подсказка обязательного поля
     *
     * @default '*' */
    requiredSymbol?: ReactElement | string;

    /** @description Скрыть подсказку обязательного поля
     *
     * @default false */
    disableRequiredSymbol?: boolean;

    /** @description Отключить внутренний текст ошибки
     *
     * @default false */
    disableInternalErrorText?: boolean;
}

export type TextFieldProps = ComponentPropsWithHTML<TextFieldPropsWithoutHtml>;

export * from './styles/types';
