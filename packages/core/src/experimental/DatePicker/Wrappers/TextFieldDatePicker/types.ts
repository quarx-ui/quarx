import { TextFieldProps, WithClassesAndStyles } from '@core';
import { PopupDatePickerProps } from '@core/src/experimental/DatePicker/Wrappers/PopupDatePicker/types';
import { TextFieldDatePickerStyleKeys } from '@core/src/experimental/DatePicker/Wrappers/TextFieldDatePicker/styles';
import { DatePickerTEXTS, PickerSelectedDate, SelectedDates } from '@core/src/experimental';

export interface ErrorsFromInput {
    /** Дата конца раньше даты начала в периоде */
    errorByEndDateBeforeStartDate?: string;
    /** Ошибка валидации начальной даты */
    errorByValidateFirstDate?: string;
    /** Ошибка валидации конечной даты */
    errorByValidateLastDate?: string;
    /** Ошибка валидации выбранного значения */
    errorByValidateSelectedPickerDate?: string;
    /** Начальная дата вне разрешенного диапазона */
    errorByDisallowedStartDate?: string;
    /** Конечная дата вне разрешенного диапазона */
    errorByDisallowedEndDate?: string;
    /** Выбранная дата вне разрешенного диапазона */
    errorByDisallowedPickerDate?: string;
}

export interface TextFieldDatePickerTEXTS extends DatePickerTEXTS, ErrorsFromInput {}

export type SplittedTextFieldProps = Omit<TextFieldProps, 'value' | 'onChange'>

export interface TextFieldDatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    Omit<PopupDatePickerProps<D>, 'anchor' | 'onClickAway' | 'open' | 'texts' | 'classes' | 'styles'>,
    WithClassesAndStyles<TextFieldDatePickerStyleKeys, Record<string, never>>
{
    /** Внешняя ошибка, которая будет отображаться даже при существующих внутренних ошибках на Picker или Period не splitted версии */
    errorText?: string;

    /** Внешняя ошибка начала, которая будет отображаться даже при существующих внутренних ошибках на Period splitted версии */
    startErrorText?: string;

    /** Внешняя ошибка конца, которая будет отображаться даже при существующих внутренних ошибках на Period splitted версии */
    endErrorText?: string;

    /** Состояния открытия календаря под TextField
     * @default false */
    open?: boolean;

    /** Props для TextField */
    textFieldProps?: TextFieldProps;

    /** Использовать валидацию на поле инпута, которая при вводе заменит невозможные значения (90.90.2023 -> 31.12.2023)
     * Возможны проблемы при удалении уже введенных значений (смещенные числа валидируются).
     * @default false */
    useExperimentalDateFieldValidation?: boolean;

    /** Разделить поле ввода периода на два TextField
     * @default false */
    splittedPeriod?: boolean;

    /** Props для TextField начала периода в splittedPeriod  */
    startSplittedPeriodProps?: SplittedTextFieldProps;

    /** Props для TextField конца периода в splittedPeriod  */
    endSplittedPeriodProps?: SplittedTextFieldProps;

    /** Объект переводов текста
     * @default false */
    texts?: TextFieldDatePickerTEXTS;

    popupDatePickerStyles?: PopupDatePickerProps['styles'];
    popupDatePickerClasses?: PopupDatePickerProps['classes'];

    /** Передача Permission в TextField */
    permissions?: {
        disabled?: boolean;
        hidden?: boolean;
    };
}
