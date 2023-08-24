import { DatePickerBlockProps, SelectedDates } from '@core/src/experimental';
import { SetErrorText } from '@core/src/experimental/DatePicker/components/DateField/utils';
import { ErrorsFromInput } from '../types';
import {
    validateAllowedDates,
    validatePeriodDatesPosition,
} from './validators';
import { isPicker } from '../../../components/Block/types';

export interface ChangeSelectedByValueProps<D extends SelectedDates> extends
    Pick<DatePickerBlockProps<D>, 'onChange' | 'allowedDates'> {
    setErrorText: SetErrorText;
    errorsFromInput: Required<ErrorsFromInput>;
    isPickerType: boolean;
    value: D;
    setStartErrorText: SetErrorText;
    setEndErrorText: SetErrorText;
    splittedPeriod: boolean;
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
    console.log(isValidAllowedDates);
    if (isValidAllowedDates && isValidPeriodDates) {
        setStartErrorText('');
        setEndErrorText('');
        onChange(value);
    }
};
