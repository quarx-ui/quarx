import { PatternFormatProps } from 'react-number-format';
import { DatePickerProps, PickerSelectedDate, SelectedDates, TextFieldProps } from '@core';

export interface DateFieldTexts {
    errorByValidationSingleDate?: string;
    errorByValidateFirstDate?: string;
    errorByValidateLastDate?: string;
}

export interface DateFieldProps<D extends SelectedDates = PickerSelectedDate> extends Omit<Partial<PatternFormatProps<TextFieldProps>>, 'value' | 'onChange' | 'inputProps'>,
    Pick<DatePickerProps, 'withTime'> {
    isSingleDate: boolean;
    value?: D;
    onChange: (date: D) => void;
    useExperimentalDateFieldValidation?: boolean;
    errorText?: string;
    texts?: DateFieldTexts;
    inputProps?: TextFieldProps['inputProps'] & {'data-field-type'?: string};
}
