import { DatePickerBlockProps, SelectedDates } from '@core/src/experimental';
import { isValid, parse } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import isUndefined from '@core/types/isUndefined';
import { validateDateString } from './validators';
import { SetErrorText } from './mappers';
import { FORMAT_DATETIME_WITH_SECONDS, FORMAT_DATETIME, FORMAT_DATE } from "./constants";

export const getFormat = (
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    if (withTime && withSeconds) {
        return FORMAT_DATETIME_WITH_SECONDS;
    }
    if (withTime) {
        return FORMAT_DATETIME;
    }
    return FORMAT_DATE;
};

export const clearErrorText = (
    setErrorText: Dispatch<SetStateAction<string>>, errorTextToCompare: string,
) => {
    setErrorText(
        (prevState) => (
            !isUndefined(prevState) && prevState === errorTextToCompare ? '' : prevState),
    );
};

export const parseDateValue = <D extends SelectedDates>(
    value: string,
    withTime: DatePickerBlockProps<D>['withTime'],
    withSeconds: DatePickerBlockProps<D>['withSeconds'],
    setError: SetErrorText,
    validationErrorText: string,
) => {
    const date = parse(value, getFormat(withTime, withSeconds), new Date());
    const isValidDate = isValid(date);
    if (isValidDate) {
        clearErrorText(setError, validationErrorText);
        return date;
    }
    setError(validationErrorText);
    return undefined;
};

export const getDate = <D extends SelectedDates>(
    value: string,
    withTime: DatePickerBlockProps<D>['withTime'],
    withSeconds: DatePickerBlockProps<D>['withTime'],
    setError: SetErrorText,
    validationErrorText: string,
) => {
    if (validateDateString(value)) {
        return parseDateValue<D>(value, withTime, withSeconds, setError, validationErrorText);
    }
    clearErrorText(setError, validationErrorText);
    return undefined;
};
