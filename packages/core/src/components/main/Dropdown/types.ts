import {
    BaseProps,
    ButtonProps,
    ComponentPropsWithHTML,
    DropdownItemsGroupProps,
    OmittedDropdownStyleParams,
    PopupProps,
    Position,
    TextFieldProps,
    TextFieldRefType,
    Values,
    WithClassesAndStyles,
} from '@core';
import { ChangeEventHandler, ReactChild, ReactElement, RefObject } from 'react';
import { DropdownStyleParams } from './styles/types';
import { DropdownStyleKeys } from './styles';
import { DROPDOWN_WIDTH_PRESETS } from './constants';

export type DropdownWidth = number | Values<typeof DROPDOWN_WIDTH_PRESETS>;
type DropdownPopupProps = Omit<PopupProps, 'anchor' | 'open' | 'onClickAway' | 'children'>;
type DropdownSearchableTextFieldProps = Omit<TextFieldProps,
| 'placeholder'
| 'onChange'
| 'onClear'
| 'loading'
| 'value'
>;

type StyleParams = Omit<DropdownStyleParams, keyof OmittedDropdownStyleParams>;

export interface DropdownPropsWithoutHtml extends
    BaseProps,
    Partial<StyleParams>,
    WithClassesAndStyles<DropdownStyleKeys, StyleParams>
{
    // ---------- Popup properties ----------
    /** Якорный элемент */
    anchor: RefObject<HTMLElement> | Position;

    /** Видимость всплывающего окна
     *
     * @default false */
    open?: boolean;

    /** Ширина Dropdown
     *
     * @default width=fit-content, min-width=anchor width, max-width=512px */
    width?: number | DropdownWidth;

    /** Минимальная ширина, независимая от выбора предустановленной ширины */
    minWidth?: number;

    /** Максимальная ширина, независимая от выбора предустановленной ширины */
    maxWidth?: number;

    /** Функция, вызываемая при клике вне дочернего компонента */
    onClickAway(event: MouseEvent | TouchEvent): void;

    /** Свойства всплывающего окна */
    PopupProps?: DropdownPopupProps;

    // ---------- Header properties ----------
    /** Заголовок компонента */
    title?: string;

    /** Вспомогательный текст для поисковой строки */
    searchPlaceHolder?: string;

    /** Обработчик события изменения значения компонента */
    onSearchChange?: ChangeEventHandler<TextFieldRefType>;

    /** Обработчик очистки поисковой строки */
    onSearchClear?: TextFieldProps['onClear'];

    /** Состояние загрузки поисковой строки
     *
     * @default false */
    searchLoading?: boolean;

    /** Текст поисковой строки */
    searchText?: string;

    /** Свойства поисковой строки */
    SearchableTextFieldProps?: DropdownSearchableTextFieldProps;

    /** Пользовательская шапка компонента. Заменяет шапку по умолчанию
     *
     * @default Title & Searchable text field */
    header?: ReactChild;

    // ---------- Body properties ----------
    /** Основной контент компонента */
    children:
    | Array<ReactElement<DropdownItemsGroupProps>>
    | ReactElement<DropdownItemsGroupProps>
    | ReactChild;

    // ---------- Footer properties ----------
    /** Подвал с кнопочным управлением
     *
     * @default true */
    buttonManagement?: boolean;

    /** Обработчик события клика по кнопке применения */
    onAcceptButtonClick?: ButtonProps['onClick'];

    /** Свойства кнопки "Принять"
     *
     * @default {} */
    AcceptButtonProps?: ButtonProps;

    /** Обработчик события клика по кнопке сброса */
    onCancelButtonClick?: ButtonProps['onClick'];

    /** Свойства кнопки "Отменить"
     *
     * @default {} */
    CancelButtonProps?: ButtonProps;

    /** Пользовательский подвал компонента. Заменяет подвал по умолчанию
     *
     * @default Accept & Cancel buttons */
    footer?: ReactChild;
}

export type DropdownProps = ComponentPropsWithHTML<DropdownPropsWithoutHtml>;
