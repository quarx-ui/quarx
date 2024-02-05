import { SelectedDates } from '@core/src/experimental';
import { isEqual } from 'date-fns';
import isUndefined from '@core/types/isUndefined';
import { isMultiple, isPeriod, isPicker } from '../../Block/types';

export const validateDateString = (value: string, placeholderDate: string) => {
    const validationRegExp = /[^0-9.:, \s-]/g;
    if (value.endsWith(placeholderDate)) {
        return !value.slice(0, -placeholderDate.length).match(validationRegExp);
    }
    return !value.match(validationRegExp);
};

export const isEqualDateOrUndefined = (value?: Date, dateToCompare?: Date) => {
    if (value && dateToCompare) {
        return isEqual(value, dateToCompare);
    }
    return isUndefined(value) && isUndefined(dateToCompare);
};

export const isEqualValue = <D extends SelectedDates>(value: D, dateToCompare: D) => {
    if (isPicker(value) && isPicker(dateToCompare)) {
        return isEqualDateOrUndefined(value, dateToCompare);
    } if (isPeriod(value) && isPeriod(dateToCompare)) {
        return isEqualDateOrUndefined(value.start, dateToCompare.start)
            && isEqualDateOrUndefined(value.end, dateToCompare.end);
    } if (isMultiple(value) && isMultiple(dateToCompare) && value.length === dateToCompare.length) {
        return value.map((date, index) => isEqual(date, dateToCompare[index]));
    }
    return false;
};

export const isEmptySelected = <D extends SelectedDates>(value: D) => isEqualValue(
    value, isPicker(value) ? undefined : isMultiple(value) ? [] : {} as D,
);
