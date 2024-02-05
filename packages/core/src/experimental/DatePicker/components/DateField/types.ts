import { PatternFormatProps } from 'react-number-format';
import { TextFieldProps } from '@core';
import { DatePickerBlockProps, PickerSelectedDate, SelectedDates } from '@core/src/experimental';

export interface DateFieldTexts {
    errorByValidationSingleDate?: string;
    errorByValidateFirstDate?: string;
    errorByValidateLastDate?: string;
}

type PatternFormatPropsToDateField = Omit<
Partial<PatternFormatProps<TextFieldProps>>, 'value' | 'onChange' | 'inputProps'
>

export interface DateFieldProps<D extends SelectedDates = PickerSelectedDate> extends
    PatternFormatPropsToDateField,
    Pick<DatePickerBlockProps<D>, 'withTime' | 'withSeconds'> {
    isSingleDate: boolean;
    value?: D;
    onChange: (date: D) => void;
    useExperimentalDateFieldValidation?: boolean;
    errorText?: string;
    texts?: DateFieldTexts;
    inputProps?: TextFieldProps['inputProps'] & {'data-field-type'?: string};
}
