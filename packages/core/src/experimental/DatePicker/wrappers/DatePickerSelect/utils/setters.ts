import { DatePickerBlockProps, SelectedDates } from '@core/src/experimental';
import { isPicker } from '@core/src/experimental/DatePicker/components/Block/types';
import {
    validateAllowedDates,
    ValidateAllowedPeriod,
    validatePeriodDatesPosition,
} from './validators';

export interface ChangeSelectedByValueProps<D extends SelectedDates> extends
    Pick<DatePickerBlockProps<D>, 'onChange' | 'allowedDates'>,
    Pick<ValidateAllowedPeriod,
    | 'setErrorText'
    | 'errorsFromInput'
    | 'isPickerType'
    | 'setStartErrorText'
    | 'setEndErrorText'
    | 'splittedPeriod'>
{
    value: D;
}

export const changeSelectedByValue = <D extends SelectedDates>({
    onChange,
    value,
    isPickerType,
    allowedDates,
    setErrorText,
    errorsFromInput,
    setStartErrorText,
    setEndErrorText,
    splittedPeriod,
}: ChangeSelectedByValueProps<D>) => {
    const isValidAllowedDates = validateAllowedDates({
        value,
        setErrorText,
        errorsFromInput,
        allowedDates,
        isPickerType,
        setStartErrorText,
        setEndErrorText,
        splittedPeriod,
    });
    const isValidPeriodDates = isPicker(value) ? true
        : validatePeriodDatesPosition({
            value,
            setErrorText,
            errorText: errorsFromInput.errorByEndDateBeforeStartDate,
            setStartErrorText,
            setEndErrorText,
            splittedPeriod,
        });
    if (isValidAllowedDates && isValidPeriodDates) {
        setStartErrorText('');
        setEndErrorText('');
        onChange(value);
    }
};
