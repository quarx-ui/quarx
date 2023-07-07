import { DatePickerBlockProps, SelectedDates } from '@core/src/experimental';
import { isValid, parse } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import isUndefined from '@core/types/isUndefined';
import { validateDateString } from '../../../components/DateField/utils/validators';
import { FORMAT_DATE, FORMAT_DATETIME } from './constants';

type SetErrorText = Dispatch<SetStateAction<string | undefined>>;

export const getFormat = (withTime: DatePickerBlockProps['withTime']) => (withTime ? FORMAT_DATETIME : FORMAT_DATE);

export const clearErrorText = (
    setErrorText: Dispatch<SetStateAction<string | undefined>>, errorTextToCompare: string,
) => {
    setErrorText((prevState) => (!isUndefined(prevState) && prevState === errorTextToCompare ? undefined : prevState));
};

export const parseDateValue = <D extends SelectedDates>(
    value: string, withTime: DatePickerBlockProps['withTime'], setError: SetErrorText,
    validationErrorText: string,
) => {
    const date = parse(value, getFormat(withTime), new Date());
    const isValidDate = isValid(date);
    if (isValidDate) {
        clearErrorText(setError, validationErrorText);
        return date;
    }
    setError(validationErrorText);
    return undefined;
};

export const getDate = <D extends SelectedDates>(
    value: string, withTime: DatePickerBlockProps['withTime'], setError: SetErrorText,
    validationErrorText: string,
) => {
    if (validateDateString(value)) {
        return parseDateValue<D>(value, withTime, setError, validationErrorText);
    }
    clearErrorText(setError, validationErrorText);
    return undefined;
};
