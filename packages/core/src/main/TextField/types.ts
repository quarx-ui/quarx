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

type OmittedBaseProps = Omit<BaseProps<TextFieldRefType>, 'permissions'>;

export interface BaseTextFieldProps extends
    Partial<BaseTextFieldStyleParams>,
    OmittedBaseProps
{
    /** Максимальное количество символов */
    maxLength?: number;

    /** Обязательное поле
     *
     * @default false */
    required?: boolean;

    /** Текст-заполнитель */
    placeholder?: string;

    /** Наименование поля ввода */
    name?: string;

    /** Дефолтное Значение поля */
    defaultValue?: string;

    /** Значение поля */
    value?: string;

    /** Количество строк в textarea */
    rows?: number;

    /** Минимальное количество строк в textarea */
    minRows?: number;

    /** Максимальное количество строк в textarea */
    maxRows?: number;

    /** Ссылка к HTML-элементу input */
    inputRef?: Ref<TextFieldRefType>;

    /** Объект со свойствами текстового поля */
    inputProps?: Omit<JSX.IntrinsicElements['input'] & JSX.IntrinsicElements['textarea'], 'value' & { value?: string }>;

    /** Обработчик события изменения поля ввода */
    onChange?: ChangeEventHandler<TextFieldRefType>;
}

type StyleParams = Partial<Omit<TextFieldStyleParams, keyof OmittedFieldStyleParams>>;
type OmittedBaseTextFieldProps = Omit<BaseTextFieldProps, 'className' | 'ref'>

export interface TextFieldPropsWithoutHtml extends
    StyleParams,
    OmittedBaseTextFieldProps,
    WithClassesAndStyles<TextFieldStyleKeys, TextFieldStyleParams & BaseTextFieldStyleParams, TextFieldCSSVarKeys>,
    BaseProps
{
    /** Заголовок поля */
    label?: string | ReactNode;

    /** Скрытие компонента. Удаляет со страницы
     *
     * @default false */
    hidden?: boolean;

    /** Включает автофокус при инициализации компонента
     *
     * @default false */
    autoFocus?: boolean;

    /** Разрешить переполнение текстового поля
     *
     * @default true */
    overflow?: boolean;

    /** Счетчик символов */
    counter?: boolean;

    /** Текст ошибки */
    errorText?: string;

    /** Объект с текстами ошибок */
    internalErrors?: {
        maxLength?: string;
        required?: string;
    };

    /** Подсказка */
    helperText?: string;

    /** Обработчик события очистки поля */
    onClear?: (value: string) => void;

    /** Правый элемент поля */
    rightItem?: ReactElement;

    /** Левый элемент поля */
    leftItem?: ReactElement;

    /** Подсказка обязательного поля
     *
     * @default '*' */
    requiredSymbol?: ReactElement | string;

    /** Скрыть подсказку обязательного поля
     *
     * @default false */
    disableRequiredSymbol?: boolean;

    /** Отключить внутренний текст ошибки
     *
     * @default false */
    disableInternalErrorText?: boolean;
}

export type TextFieldProps = ComponentPropsWithHTML<TextFieldPropsWithoutHtml>;

export * from './styles/types';
