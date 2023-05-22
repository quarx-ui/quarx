import { isPicker, SelectedDates } from '@core';
import { isEqual } from 'date-fns';
import isUndefined from '@core/types/isUndefined';

export const validateDateString = (value: string) => !!value && !value.match(/[^0-9.: \s-]/g);

export const isEqualDateOrUndefined = (value?: Date, dateToCompare?: Date) => {
    if (value && dateToCompare) {
        return isEqual(value, dateToCompare);
    }
    return isUndefined(value) && isUndefined(dateToCompare);
};

export const isEqualValue = <D extends SelectedDates>(value: D, dateToCompare: D) => {
    if (isPicker(value) && isPicker(dateToCompare)) {
        return isEqualDateOrUndefined(value, dateToCompare);
    } if (!isPicker(value) && !isPicker(dateToCompare)) {
        console.log(value, dateToCompare);
        return isEqualDateOrUndefined(value.start, dateToCompare.start)
            && isEqualDateOrUndefined(value.end, dateToCompare.end);
    }
};
