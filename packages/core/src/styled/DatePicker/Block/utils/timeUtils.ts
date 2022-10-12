import { format } from 'date-fns';
import { PickedDatesDatePicker, DatePickerTimeTypes } from '@core';
import { DATE_PICKER_TIME_TYPES } from '..';

const parseTimeFromDate = (date: Date) => format(date, 'HH:mm:ss');

export const parseDateTime = (date: Date) => format(date, '');

const parseOneDayPeriodPlaceholder = (dates?: PickedDatesDatePicker) => {
    if (dates && 'startDate' in dates && dates.startDate && dates.endDate) {
        return `${parseTimeFromDate(dates.startDate)} – ${parseTimeFromDate(dates.endDate)}`;
    } if (dates && 'startDate' in dates && dates.startDate) {
        return `${parseTimeFromDate(dates.startDate)} – 23:59:59`;
    }
    return '00:00:00 – 23:59:59';
};

export const mapTypeToPlaceholder = (type : DatePickerTimeTypes, dates?: PickedDatesDatePicker) => {
    switch (type) {
        case DATE_PICKER_TIME_TYPES.PERIOD:
            return parseOneDayPeriodPlaceholder(dates);
        case DATE_PICKER_TIME_TYPES.PICKER:
            return dates && 'selectedDate' in dates && dates.selectedDate
                ? parseTimeFromDate(dates.selectedDate) : '00:00:00';
        default:
            return '';
    }
};

export const mapTypeToMask = (type : DatePickerTimeTypes): string => {
    switch (type) {
        case DATE_PICKER_TIME_TYPES.PERIOD:
            return '99:99:99 – 99:99:99';
        case DATE_PICKER_TIME_TYPES.PICKER:
            return '99:99:99';
        default:
            return '';
    }
};
