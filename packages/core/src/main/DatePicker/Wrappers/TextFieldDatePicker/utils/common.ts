import { DatePickerProps, SelectedDates } from '@core';
import { isValid, parse } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import isUndefined from '@core/types/isUndefined';
import { MapValueToTypeSelected } from './mappers';
import { validateDateString } from '../../../components/DateField/utils/validators';

export const getFormat = (withTime: DatePickerProps['withTime']) => (withTime ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy');

export const clearErrorText = (
    setErrorText: Dispatch<SetStateAction<string | undefined>>, errorTextToCompare: string,
) => {
    setErrorText((prevState) => (!isUndefined(prevState) && prevState === errorTextToCompare ? undefined : prevState));
};

export const parseDateValue = <D extends SelectedDates>(
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

export const getDate = <D extends SelectedDates>(
    value: string, withTime: DatePickerProps['withTime'], setError: MapValueToTypeSelected<D>['setErrorText'],
    validationErrorText: string,
) => {
    if (validateDateString(value)) {
        return parseDateValue<D>(value, withTime, setError, validationErrorText);
    }
    clearErrorText(setError, validationErrorText);
    return undefined;
};
