import { PickerSelectedDate, SelectedDatesDatePicker, TextFieldProps } from '@core';
import { PopupDatePickerProps } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker/types';

export interface TextFieldDatePickerProps<D extends SelectedDatesDatePicker = PickerSelectedDate> extends Omit<PopupDatePickerProps<D>, 'anchor' | 'onClickAway' | 'open'> {
    open?: boolean;
    customDateSeparatorRegExp?: RegExp;
    textFieldProps?: TextFieldProps;
}
