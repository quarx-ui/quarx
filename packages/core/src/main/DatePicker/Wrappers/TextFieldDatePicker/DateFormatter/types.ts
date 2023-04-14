import { PatternFormatProps } from 'react-number-format';
import { DatePickerProps, TextFieldProps } from '@core';
import { TextFieldDatePickerProps } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/types';

export interface DateFormatterProps extends Partial<PatternFormatProps<TextFieldProps>>, Pick<DatePickerProps, 'withTime'>, Required<Pick<TextFieldDatePickerProps, 'customDateSeparatorRegExp'>>{
    isPicker: boolean;
}
