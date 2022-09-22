import { PickQxSize } from '@core/enums';
import { BorderRadiusSize } from '@core/styles';

export type TextFieldBorderRadius = BorderRadiusSize
export type TextFieldSize = PickQxSize<'large' | 'medium' | 'small'>
export type TextFieldColorBase = 'main' | 'secondary'
export type TextFieldClearIconVisibleOn = 'always' | 'interact' | 'none';

export interface BaseTextFieldStyleParams {
    /** Многострочность текстового поля
     *
     * @default false */
    multiline: boolean,

    /** Изменяет состояние компонента на активное/неактивное
     *
     * @default false */
    disabled: boolean,

    /** Доступно только для чтения. Работает так же как `disabled`, но без визуального обозначения
     *
     * @default false */
    readOnly: boolean,
}

export interface OmittedFieldStyleParams {
    overflowed: boolean
    hasValue: boolean
    rightItemIsExist: boolean,
    bottomIsVisible: boolean,
}

export interface TextFieldStyleParams extends OmittedFieldStyleParams {
    /** Видимость счетчика символов
     *
     * @property always счетчик отображается всегда
     * @property focus счетчик отображается при фокусе и сохраняется при введенном значении
     *
     * @default always */
    counterVisibleOn: 'always' | 'focus',

    /** Абсолютное позиционирование `helperText` и `counter`
     *
     * @default false */
    bottomIsAbsolute: boolean,

    /** Состояние заполненности поля
     *
     * @default undefined */
    filled: boolean,

    /** Размер текстового поля
     *
     * @default medium */
    size: TextFieldSize,

    /** Цветовая основа
     *
     * @property main используется на основном фоне
     * @property secondary используется на дополнительном фоне
     *
     * @default main */
    colorBase: TextFieldColorBase,

    /** Скругление компонента. Значения соответствуют токенам объекта `borderRadii`
     *
     * @default medium */
    borderRadius: TextFieldBorderRadius,

    /** Состояние фокуса
     *
     * @default undefined */
    focused: boolean,

    /** Анимация загрузки
     *
     * @default false */
    loading: boolean,

    /** Признак ошибки.
     * Если установлено `false` - отключается текст переданный в `errorText`. */
    error: boolean,

    /** Скрытие заголовка поля
     *
     * @default false */
    disableLabel: boolean,

    /** Отключить стили наведения
     *
     * @default false */
    disableHoverStyles: boolean,

    /** Состояние, при котором иконка очистки поля будет показана
     *
     * @property always появляется при вводе текста
     * @property interact появление иконки, при наведении или при фокусе
     * @property none отключение иконки
     *
     * @default interact */
    clearIconVisibleOn: TextFieldClearIconVisibleOn,

}
