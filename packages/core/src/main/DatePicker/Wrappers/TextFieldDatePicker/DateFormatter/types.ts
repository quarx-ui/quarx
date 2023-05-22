import { PatternFormatProps } from 'react-number-format';
import { DatePickerProps, TextFieldProps } from '@core';

export interface DateFormatterProps extends Partial<PatternFormatProps<TextFieldProps>>, Pick<DatePickerProps, 'withTime'> {
    isPicker: boolean;
    useExperimentalDateFieldValidation: boolean;
}
