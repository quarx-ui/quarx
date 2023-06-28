import { setHours, setMinutes, setSeconds, format, isBefore, isEqual } from 'date-fns';
import { Values, valuesAsKeysFromArray } from '@core';
import { PeriodSelectedDates, PickerSelectedDate } from '@core/src/experimental';
import { isValidTime } from '../../utils';
import { ErrorMessageSetters } from '..';

export const TIME_INPUT_TYPE = valuesAsKeysFromArray(['PICK', 'START', 'END'] as const);

export type TimeInputType = Values<typeof TIME_INPUT_TYPE>

export const isCompletedTime = (date: string) => date && !date.includes('_');

export const createError = (errorMessageSetters: ErrorMessageSetters, inputType: TimeInputType, error?: string) => {
    if (inputType === TIME_INPUT_TYPE.PICK) {
        errorMessageSetters.setErrorMessagePicker(error);
    } else if (inputType === TIME_INPUT_TYPE.START) {
        errorMessageSetters.setErrorMessageStart(error);
    } else if (inputType === TIME_INPUT_TYPE.END) {
        errorMessageSetters.setErrorMessageEnd(error);
    }
};

export const parseTimeParts = (time: string) => time.split(':').map((item) => Number(item));

export const isValidTimeValue = (timeValue: string) => {
    const [hour, minutes, seconds] = parseTimeParts(timeValue);
    return isValidTime(hour, minutes, seconds);
};

export const setTime = (date: Date, time: string, errorMessageSetters: ErrorMessageSetters,
    inputType: TimeInputType, errorValidateText: string) => {
    const [hour, minutes, seconds] = parseTimeParts(time);
    if (isValidTime(hour, minutes, seconds)) {
        createError(errorMessageSetters, inputType, undefined);
        return setHours(setMinutes(setSeconds(date, seconds), minutes), hour);
    }
    createError(errorMessageSetters, inputType, errorValidateText);
    return date;
};

const parseTime = (parsedKey: keyof PeriodSelectedDates, selected: PeriodSelectedDates, value: string,
    errorMessageSetters: ErrorMessageSetters, inputType: TimeInputType,
    errorValidateText: string): PeriodSelectedDates => {
    const actualDate = selected?.[parsedKey];
    if (actualDate && isCompletedTime(value)) {
        const newSelected = {
            ...selected,
            [parsedKey]: setTime(actualDate,
                value, errorMessageSetters, inputType, errorValidateText),
        };
        if (newSelected.start && newSelected.end
            && (isBefore(newSelected.end, newSelected.start) || isEqual(newSelected.start, newSelected.end))
        ) {
            createError(errorMessageSetters, inputType, errorValidateText);
        } else {
            return newSelected;
        }
    }
    return selected;
};

export const mapTimesToPeriodSelected = (
    value: string,
    selected: PeriodSelectedDates,
    inputType: TimeInputType,
    errorMessageSetters: ErrorMessageSetters,
    errorValidateText: string,
): PeriodSelectedDates => {
    if (selected) {
        if (inputType === TIME_INPUT_TYPE.START) {
            return parseTime('start', selected, value, errorMessageSetters, inputType, errorValidateText);
        }
        if (inputType === TIME_INPUT_TYPE.END) {
            return parseTime('end', selected, value, errorMessageSetters, inputType, errorValidateText);
        }
    }
    return {};
};

export const mapTimesToPickerSelected = (
    value: string,
    selected: PickerSelectedDate,
    inputType: TimeInputType,
    errorMessageSetters: ErrorMessageSetters,
    errorValidateText: string,
) => {
    const selectedTimeStr = value.trim();
    if (selected) {
        return (
            !isCompletedTime(selectedTimeStr))
            ? setTime(selected, '00:00:00', errorMessageSetters, inputType, errorValidateText)
            : setTime(selected, selectedTimeStr, errorMessageSetters, inputType, errorValidateText);
    }
    return !isCompletedTime(selectedTimeStr)
        ? setTime(new Date(), '00:00:00', errorMessageSetters, inputType, errorValidateText)
        : setTime(new Date(), selectedTimeStr, errorMessageSetters, inputType, errorValidateText);
};

export const getTimeFromDate = (date?: Date) => (date ? format(date, 'HH:mm:ss') : '');
