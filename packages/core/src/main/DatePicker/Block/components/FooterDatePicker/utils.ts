import { setHours, setMinutes, setSeconds, format } from 'date-fns';
import { Values, valuesAsKeysFromArray, DatePickerTimeTypes, PickedDatesDatePicker } from '@core';
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

const parseTime = (parsedKey: string, dates: PickedDatesDatePicker, value: string,
    errorMessageSetters: ErrorMessageSetters, inputType: TimeInputType,
    errorValidateText: string) : PickedDatesDatePicker => {
    if (parsedKey in dates && dates[parsedKey as keyof PickedDatesDatePicker] && isCompletedTime(value)) {
        return {
            ...dates,
            [parsedKey as keyof PickedDatesDatePicker]: setTime(dates[parsedKey as keyof PickedDatesDatePicker],
                value, errorMessageSetters, inputType, errorValidateText),
        };
    }
    return dates;
};

export const mapTimesToDates = (
    value: string,
    dates: PickedDatesDatePicker | undefined,
    type: DatePickerTimeTypes,
    inputType: TimeInputType,
    errorMessageSetters: ErrorMessageSetters,
    errorValidateText: string,
): PickedDatesDatePicker | undefined => {
    if (dates) {
        if (inputType === TIME_INPUT_TYPE.START) {
            return parseTime('startDate', dates, value, errorMessageSetters, inputType, errorValidateText);
        } if (inputType === TIME_INPUT_TYPE.END) {
            return parseTime('endDate', dates, value, errorMessageSetters, inputType, errorValidateText);
        }
        const selectedTimeStr = value.trim();
        if (dates && 'selectedDate' in dates && dates.selectedDate) {
            return (!isCompletedTime(selectedTimeStr)) ? {
                selectedDate: setTime(dates.selectedDate, '00:00:00',
                    errorMessageSetters, inputType, errorValidateText),
            } : { selectedDate: setTime(dates.selectedDate, selectedTimeStr,
                errorMessageSetters, inputType, errorValidateText) };
        }
        return !isCompletedTime(selectedTimeStr) ? {
            selectedDate: setTime(new Date(), '00:00:00', errorMessageSetters, inputType, errorValidateText),
        } : { selectedDate: setTime(new Date(), selectedTimeStr, errorMessageSetters, inputType, errorValidateText) };
    }
    return dates;
};

export const getTimeFromDate = (key: string, dates?: PickedDatesDatePicker) => (dates && key in dates
        && dates[key as keyof PickedDatesDatePicker] && format(dates[key as keyof PickedDatesDatePicker], 'HH:mm:ss'))
    || '';
