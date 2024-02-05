import { TextFieldProps } from '@core';
import { DatePickerTexts, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DatePickerProps } from '../DatePicker/types';

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
    /** Одна из выбранных дат вне разрешенного диапазона */
    errorByDisallowedMultipleDates?: string;
}

export interface DatePickerSelectTexts extends DatePickerTexts, ErrorsFromInput {}

export type SplittedTextFieldProps = Omit<TextFieldProps, 'value' | 'onChange'>

type DatePickerPropsToTextField<D extends SelectedDates> = Omit<DatePickerProps<D>, 'anchor' | 'onClickAway'
| 'open' | 'texts'>

export interface DatePickerSelectProps<D extends SelectedDates = PickerSelectedDate> extends
    DatePickerPropsToTextField<D>
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
    texts?: DatePickerSelectTexts;

    popupDatePickerStyles?: DatePickerProps['styles'];
    popupDatePickerClasses?: DatePickerProps['classes'];

    /** Передача Permission в TextField */
    permissions?: {
        disabled?: boolean;
        hidden?: boolean;
    };
}
