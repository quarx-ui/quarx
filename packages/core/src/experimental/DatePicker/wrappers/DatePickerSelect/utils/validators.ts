import { DatePickerAllowedDates, PeriodSelectedDates, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { isAfter, isBefore } from 'date-fns';
import isUndefined from '@core/types/isUndefined';
import { ChangeSelectedByValueProps } from './setters';
import { clearErrorText } from '../../../components/DateField/utils/common';
import {
    isAllowedDatesPeriod,
    isAllowedDatesValidationFunction,
    isMultiple,
    isPicker,
    MultipleSelectedDates,
} from '../../../components/Block/types';

export interface ValidateAllowedPeriod<D extends SelectedDates = PickerSelectedDate> extends
    Pick<ChangeSelectedByValueProps<D>, 'setErrorText' | 'errorsFromInput' | 'isPickerType' | 'allowedDates'
    | 'setStartErrorText' | 'setEndErrorText' | 'splittedPeriod'
    > {
    value: D;
}

interface ValidateAllowedPeriodWithoutType<D extends SelectedDates> extends
    Omit<ValidateAllowedPeriod<D>, 'isPickerType' | 'allowedDates'> {
    allowedDates: DatePickerAllowedDates;
}

interface ValidateDateToAllowedDates extends
    Omit<ValidateAllowedPeriodWithoutType<Date | undefined>, 'newSelected' | 'errorsFromInput'> {
    date?: Date;
    errorText: string;
}

export interface ValidatePeriodDatesPositionProps extends
    Pick<ChangeSelectedByValueProps<PeriodSelectedDates>, 'setErrorText' | 'setEndErrorText' | 'setStartErrorText'
    | 'splittedPeriod'> {
    value: PeriodSelectedDates;
    errorText: string;
}

const validateDateToAllowedDates = (
    props: Omit<ValidateDateToAllowedDates, 'setEndErrorText' | 'setStartErrorText' | 'splittedPeriod'>,
) => {
    const { allowedDates, setErrorText, errorText, value: date } = props;
    if (isAllowedDatesPeriod(allowedDates) && date) {
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
    if (date && isAllowedDatesValidationFunction(allowedDates)) {
        const isValid = allowedDates(date);
        if (!isValid) {
            setErrorText(errorText);
            return false;
        }
    }
    setErrorText((prevState) => (prevState === errorText ? '' : prevState));
    return true;
};

export const validateAllowedDatesOnPicker = (props: ValidateAllowedPeriodWithoutType<PickerSelectedDate>): boolean => {
    const { value, errorsFromInput, ...restProps } = props;
    return validateDateToAllowedDates({ value, errorText: errorsFromInput.errorByDisallowedPickerDate, ...restProps });
};
export const validateAllowedDatesOnPeriod = (props: ValidateAllowedPeriodWithoutType<PeriodSelectedDates>) => {
    const { value, errorsFromInput, setEndErrorText, setStartErrorText, setErrorText, splittedPeriod, ...rest } = props;
    const isStartDateValid = validateDateToAllowedDates(
        { value: value.start,
            errorText: errorsFromInput.errorByDisallowedStartDate,
            ...rest,
            setErrorText: splittedPeriod ? setStartErrorText : setErrorText },
    );
    const isEndDateValid = validateDateToAllowedDates(
        { value: value.end,
            errorText: errorsFromInput.errorByDisallowedEndDate,
            ...rest,
            setErrorText: splittedPeriod ? setEndErrorText : setErrorText },
    );
    return isStartDateValid && isEndDateValid;
};

export const validateAllowedDatesOnMultiply = (props: ValidateAllowedPeriodWithoutType<MultipleSelectedDates>): boolean => {
    const { value, errorsFromInput, ...rest } = props;
    return value.length === 0 || !value.some((date) => !validateDateToAllowedDates(
        { value: date, errorText: errorsFromInput.errorByDisallowedMultipleDates, ...rest },
    ));
};

export const validateAllowedDates = <D extends SelectedDates = PickerSelectedDate>(
    props: ValidateAllowedPeriod<D>,
): boolean => {
    const { allowedDates, value, ...restProps } = props;
    if (allowedDates) {
        if (isPicker(value)) {
            return validateAllowedDatesOnPicker({ value, allowedDates, ...restProps });
        }
        if (isMultiple(value)) {
            return validateAllowedDatesOnMultiply({ value, allowedDates, ...restProps });
        }
        return validateAllowedDatesOnPeriod({ value, allowedDates, ...restProps });
    }
    return true;
};

export const validatePeriodDatesPosition = (
    { value, setErrorText, errorText, setEndErrorText, setStartErrorText, splittedPeriod }
    : ValidatePeriodDatesPositionProps,
) => {
    if (value.start && value.end && isAfter(value.start, value.end)) {
        if (splittedPeriod) {
            setStartErrorText(errorText);
            setEndErrorText(errorText);
        } else {
            setErrorText(errorText);
        }
        return false;
    }
    clearErrorText(setErrorText, errorText);
    return true;
};
