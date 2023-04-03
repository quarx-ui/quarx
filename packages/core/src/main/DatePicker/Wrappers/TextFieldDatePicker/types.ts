import { PickerSelectedDate, SelectedDatesDatePicker, TextFieldProps } from '@core';
import { PopupDatePickerProps } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker/types';

export interface TextFieldDatePickerProps<D extends SelectedDatesDatePicker = PickerSelectedDate> extends PopupDatePickerProps<D> {
    textFieldProps?: TextFieldProps;
}
