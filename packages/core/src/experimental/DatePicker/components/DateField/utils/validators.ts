import { SelectedDates } from '@core/src/experimental';
import { isEqual } from 'date-fns';
import isUndefined from '@core/types/isUndefined';
import { isPicker } from '../../Block/types';

export const validateDateString = (value: string) => !value.match(/[^0-9.: \s-]/g);

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
        return isEqualDateOrUndefined(value.start, dateToCompare.start)
            && isEqualDateOrUndefined(value.end, dateToCompare.end);
    }
    return false;
};

export const isEmptySelected = <D extends SelectedDates>(value: D) => isEqualValue(
    value, isPicker(value) ? undefined : {} as D,
);
