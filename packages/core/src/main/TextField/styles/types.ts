import { PickQxSize, QxBorderSize } from '@core';

export type TextFieldBorderRadius = QxBorderSize;
export type TextFieldSize = PickQxSize<'large' | 'medium' | 'small'>;
export type TextFieldColorBase = 'main' | 'secondary';
export type TextFieldClearIconVisibleOn = 'always' | 'interact' | 'none';

export interface BaseTextFieldStyleParams {
    /** @description Многострочность текстового поля
     *
     * @default false */
    multiline: boolean;

    /** @description Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean;

    /** @description Доступно только для чтения. Работает так же как `disabled`,
     * но без визуального обозначения
     *
     * @default false */
    readOnly: boolean;
}

export interface OmittedFieldStyleParams {
    overflowed: boolean;
    hasValue: boolean;
    rightItemIsExist: boolean;
    bottomIsVisible: boolean;
}

export interface TextFieldStyleParams extends OmittedFieldStyleParams {
    /** @description Видимость счетчика символов
     *
     * @property always счетчик отображается всегда
     * @property focus счетчик отображается при фокусе и сохраняется при введенном значении
     *
     * @default always */
    counterVisibleOn: 'always' | 'focus';

    /** @description Абсолютное позиционирование `helperText` и `counter`
     *
     * @default false */
    bottomIsAbsolute: boolean;

    /** @description Состояние заполненности поля
     *
     * @default undefined */
    filled: boolean;

    /** @description Размер текстового поля
     *
     * @default medium */
    size: TextFieldSize;

    /** @description Цветовая основа
     *
     * @property main используется на основном фоне
     * @property secondary используется на дополнительном фоне
     *
     * @default main */
    colorBase: TextFieldColorBase;

    /** @description Скругление компонента.
     * Значения соответствуют токенам объекта `borderRadii`
     *
     * @default medium */
    borderRadius: TextFieldBorderRadius;

    /** @description Состояние фокуса
     *
     * @default undefined */
    focused: boolean;

    /** @description Анимация загрузки
     *
     * @default false */
    loading: boolean;

    /** @description Признак ошибки.
     * Если установлено `false` - отключается текст переданный в `errorText`. */
    error: boolean;

    /** @description Скрытие заголовка поля
     *
     * @default false */
    disableLabel: boolean;

    /** @description Отключить стили наведения
     *
     * @default false */
    disableHoverStyles: boolean;

    /** @description Состояние, при котором иконка очистки поля будет показана
     *
     * @property always появляется при вводе текста
     * @property interact появление иконки, при наведении или при фокусе
     * @property none отключение иконки
     *
     * @default interact */
    clearIconVisibleOn: TextFieldClearIconVisibleOn;
}
