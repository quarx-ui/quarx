import { DatePickerAllowedDates, isPicker, PeriodSelectedDates, PickerSelectedDate, SelectedDates } from '@core';
import { isAfter, isBefore } from 'date-fns';
import isUndefined from '@core/types/isUndefined';
import { ChangeSelectedByValueProps } from './setters';
import { clearErrorText } from '../../../components/DateField/utils/common';

export interface ValidateAllowedPeriod<D extends SelectedDates = PickerSelectedDate> extends Pick<ChangeSelectedByValueProps<D>,
'setErrorText' | 'errorsFromInput' | 'isPickerType' | 'allowedDates'
> {
    value: D;
}

interface ValidateAllowedPeriodWithoutType<D extends SelectedDates> extends Omit<ValidateAllowedPeriod<D>, 'isPickerType' | 'allowedDates'> {
    allowedDates: DatePickerAllowedDates;
}

interface ValidateDateToAllowedDates extends Omit<ValidateAllowedPeriodWithoutType<Date | undefined>, 'newSelected' | 'errorsFromInput'> {
    date?: Date;
    errorText: string;
}

export interface ValidatePeriodDatesPositionProps extends Pick<ChangeSelectedByValueProps<PeriodSelectedDates>, 'setErrorText'> {
    value: PeriodSelectedDates;
    errorText: string;
}

const validateDateToAllowedDates = (props: ValidateDateToAllowedDates) => {
    const { date, allowedDates, setErrorText, errorText } = props;
    if (date) {
        const emptyStart = isUndefined(allowedDates.start);
        const emptyEnd = isUndefined(allowedDates.end);
        const selectedDateBeforeAllowedEnd = !!allowedDates.end && isBefore(date, allowedDates.end);
        const selectedDateAfterAllowedStart = !!allowedDates.start && isAfter(date, allowedDates.start);
        const emptyStartEnd = emptyStart && emptyEnd;

        if (!(emptyStartEnd
            || (emptyStart && selectedDateBeforeAllowedEnd)
            || (emptyEnd && selectedDateAfterAllowedStart)
            || (selectedDateAfterAllowedStart && selectedDateBeforeAllowedEnd))
        ) {
            setErrorText(errorText);
            return false;
        }
    }
    setErrorText((prevState) => (prevState === errorText ? undefined : prevState));
    return true;
};

export const validateAllowedDatesOnPicker = (props: ValidateAllowedPeriodWithoutType<PickerSelectedDate>): boolean => {
    const { value, errorsFromInput, ...restProps } = props;
    return validateDateToAllowedDates({ value, errorText: errorsFromInput.errorByDisallowedPickerDate, ...restProps });
};
export const validateAllowedDatesOnPeriod = (props: ValidateAllowedPeriodWithoutType<PeriodSelectedDates>) => {
    const { value, errorsFromInput, ...rest } = props;
    const isStartDateValid = validateDateToAllowedDates(
        { value: value.start, errorText: errorsFromInput.errorByDisallowedStartDate, ...rest },
    );
    const isEndDateValid = validateDateToAllowedDates(
        { value: value.start, errorText: errorsFromInput.errorByDisallowedEndDate, ...rest },
    );
    return isStartDateValid && isEndDateValid;
};

export const validateAllowedDates = <D extends SelectedDates = PickerSelectedDate>(props: ValidateAllowedPeriod<D>): boolean => {
    const { allowedDates, value, ...restProps } = props;
    if (allowedDates) {
        if (isPicker(value)) {
            return validateAllowedDatesOnPicker({ value, allowedDates, ...restProps });
        }
        return validateAllowedDatesOnPeriod({ value, allowedDates, ...restProps });
    }
    return true;
};

export const validatePeriodDatesPosition = ({ value, setErrorText, errorText }: ValidatePeriodDatesPositionProps) => {
    if (value.start && value.end && isAfter(value.start, value.end)) {
        setErrorText(errorText);
        return false;
    }
    clearErrorText(setErrorText, errorText);
    return true;
};
