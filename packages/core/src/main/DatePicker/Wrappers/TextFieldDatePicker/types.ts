import { DatePickerPropsGeneric, TextFieldProps } from '@core';

export interface TextFieldDatePicker<T, D> extends DatePickerPropsGeneric<T, D> {
    open?: boolean;
    textFieldProps: TextFieldProps;
}
