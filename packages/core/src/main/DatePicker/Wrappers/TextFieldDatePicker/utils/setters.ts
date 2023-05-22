import { DatePickerProps, isPicker, SelectedDates } from '@core';
import { SetErrorText } from '@core/src/main/DatePicker/components/DateField/utils';
import { ErrorsFromInput } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/types';
import { Dispatch, SetStateAction } from 'react';
import {
    validateAllowedDates,
    validatePeriodDatesPosition,
} from './validators';

type SetViewingDateType<D extends SelectedDates> = Dispatch<SetStateAction<DatePickerProps<D>['viewingDate']>>;

export interface ChangeSelectedByValueProps<D extends SelectedDates> extends Pick<DatePickerProps<D>, 'onChange' | 'allowedDates'> {
    setErrorText: SetErrorText;
    errorsFromInput: Required<ErrorsFromInput>;
    isPickerType: boolean;
    value: D;
}

export const changeSelectedByValue = <D extends SelectedDates>({
    onChange,
    value,
    isPickerType,
    allowedDates,
    setErrorText,
    errorsFromInput,
}: ChangeSelectedByValueProps<D>) => {
    const isValidAllowedDates = validateAllowedDates({
        value, setErrorText, errorsFromInput, allowedDates, isPickerType,
    });
    const isValidPeriodDates = isPicker(value) ? true
        : validatePeriodDatesPosition({
            value, setErrorText, errorText: errorsFromInput.errorByEndDateBeforeStartDate,
        });
    // if (value === '') {
    //     setErrorText(undefined);
    // }
    // todo посмотреть на что это аффектило
    if ((isValidAllowedDates && isValidPeriodDates)) {
        onChange(value);
    }
};
