import { DatePickerProps, SelectedDatesDatePicker } from '@core';
import { isValid, parse } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import isUndefined from '@core/types/isUndefined';
import { validateDateString } from './validators';
import { MapValueToTypeSelected } from './mappers';

export const getFormat = (withTime: DatePickerProps['withTime']) => (withTime ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy');

export const clearErrorText = (setErrorText: Dispatch<SetStateAction<string | undefined>>, errorTextToCompare: string) => {
    setErrorText((prevState) => {
        console.log(prevState === errorTextToCompare);
        return !isUndefined(prevState) && prevState === errorTextToCompare ? undefined : prevState;
    });
};

export const parseDateValue = <D extends SelectedDatesDatePicker>(
    value: string, withTime: DatePickerProps['withTime'], setError: MapValueToTypeSelected<D>['setErrorText'],
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

export const getDate = <D extends SelectedDatesDatePicker>(
    value: string, withTime: DatePickerProps['withTime'], setError: MapValueToTypeSelected<D>['setErrorText'],
    validationErrorText: string,
) => {
    if (validateDateString(value)) {
        return parseDateValue<D>(value, withTime, setError, validationErrorText);
    }
    clearErrorText(setError, validationErrorText);
    return undefined;
};
