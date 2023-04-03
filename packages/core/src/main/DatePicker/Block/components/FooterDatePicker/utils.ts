import { setHours, setMinutes, setSeconds, format } from 'date-fns';
import {
    Values,
    valuesAsKeysFromArray,
    DatePickerTimeTypes, PeriodSelectedDates, PickerSelectedDate,
} from '@core';
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

export const isValidTime = (hour: number, minutes: number, seconds: number) => hour >= 0 && hour < 24
    && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60;

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

const parseTime = (parsedKey: keyof PeriodSelectedDates, dates: PeriodSelectedDates, value: string,
    errorMessageSetters: ErrorMessageSetters, inputType: TimeInputType,
    errorValidateText: string): PeriodSelectedDates => {
    const actualDate = dates?.[parsedKey];
    if (actualDate && isCompletedTime(value)) {
        return {
            ...dates,
            [parsedKey]: setTime(actualDate,
                value, errorMessageSetters, inputType, errorValidateText),
        };
    }
    return dates;
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
