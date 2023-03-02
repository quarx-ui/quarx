import {
    DatePickerAllowedDates,
    DatePickerTimeTypes, PeriodTypeDates,
    PickedDatesDatePicker, PickerTypeDates,
} from '@core';
import {
    isAfter,
    isBefore,
    isSameDay,
    isSameMonth,
    endOfDay,
    endOfMonth,
    startOfMonth,
    isSameISOWeek, isEqual,
} from 'date-fns';
import { DATE_PICKER_TIME_TYPES } from '..';

export interface UseDayPropertiesProps {
    day: Date,
    dates?: PickedDatesDatePicker,
    type: DatePickerTimeTypes,
    hoveredDay?: Date,
    viewingDate: Date,
    allowedDates?: DatePickerAllowedDates,
}

export interface UseDayPropertiesReturn {
    isDaySelected: boolean,
    isPeriodSelected: boolean,
    isDayHovered: boolean,
    isDayInHoveredPeriod: boolean,
    isDayInViewableMonth: boolean,
    isDayInPeriod: boolean,
    isDayFirstInPeriod: boolean,
    isDayLastInPeriod: boolean,
    isEqualDays: boolean,
    isHoveredPeriod: boolean,
    isDayTrusted: boolean,
    isSecondPickInPeriod: boolean,
    isDayInPeriodLarge:boolean,
}

export type UseDayProperties = (props: UseDayPropertiesProps) => UseDayPropertiesReturn

export const mapPeriodAndHoverValues = (
    type: DatePickerTimeTypes,
    dates?: PickedDatesDatePicker,
    hoveredDay?: Date,
): PickerTypeDates & PeriodTypeDates => {
    if (!dates) {
        return {};
    }
    if (type === DATE_PICKER_TIME_TYPES.PICKER && 'selectedDate' in dates && dates.selectedDate) {
        return { selectedDate: dates.selectedDate };
    }

    if (type === DATE_PICKER_TIME_TYPES.PERIOD
        && 'startDate' in dates && 'endDate' in dates
        && dates.startDate && dates.endDate) {
        return {
            startDate: dates.startDate,
            endDate: dates.endDate,
        };
    }

    if (type === DATE_PICKER_TIME_TYPES.PERIOD && 'startDate' in dates && hoveredDay && dates.startDate) {
        return isAfter(hoveredDay, dates.startDate) ? {
            startDate: dates.startDate,
            endDate: hoveredDay,
        } : { startDate: hoveredDay,
            endDate: dates.startDate };
    }
    return {};
};

export const useDayProperties: UseDayProperties = ({ day, dates, type, hoveredDay, viewingDate,
    allowedDates }) => {
    const { startDate, endDate, selectedDate } = mapPeriodAndHoverValues(type, dates, hoveredDay);

    const PICKER_TYPE = type === DATE_PICKER_TIME_TYPES.PICKER;
    const PERIOD_TYPE = type === DATE_PICKER_TIME_TYPES.PERIOD;

    const isDaySelected = ((): boolean => {
        if (PICKER_TYPE && dates && 'selectedDate' in dates) {
            return !!selectedDate && isSameDay(selectedDate, day);
        } if (PERIOD_TYPE && dates && ('startDate' in dates || 'endDate' in dates)) {
            return (!!startDate && isSameDay(startDate, day)) || (!!endDate && isSameDay(endDate, day));
        }
        return false;
    })();

    const isPeriodSelected = ((): boolean => {
        if (PICKER_TYPE && dates && 'selectedDate' in dates) {
            return !!dates.selectedDate && isSameDay(dates.selectedDate, day);
        } if (PERIOD_TYPE && dates && ('startDate' in dates && 'endDate' in dates)) {
            return !!dates.startDate && !!dates.endDate
                && (isSameDay(dates.startDate, day) || isSameDay(dates.endDate, day));
        }
        return false;
    })();

    const isDayTrusted = (() => {
        if (allowedDates) {
            if (allowedDates.start && allowedDates.end) {
                return isAfter(day, allowedDates.start)
                    && isBefore(day, allowedDates.end);
            } if (allowedDates.end) {
                return isBefore(day, allowedDates.end);
            } if (allowedDates.start) {
                return isAfter(day, allowedDates.start);
            }
        }
        return true;
    })();

    const isDayHovered = !!hoveredDay && isSameDay(day, hoveredDay);

    const isDayInHoveredPeriod = !!(hoveredDay && (dates && 'startDate' in dates) && dates.startDate);

    const isDayInViewableMonth = isSameMonth(day, viewingDate);

    const isDayInPeriod = !!startDate && !!endDate && day
        && isAfter(day, startDate) && isBefore(endOfDay(day), endDate);

    const isDayFirstInPeriod = !!startDate && !!endDate && !!day && isSameDay(day, startDate);

    const isDayLastInPeriod = !!startDate && !!endDate && day && isSameDay(day, endDate);

    const isEqualDays = !!endDate && !!startDate && isSameDay(endDate, startDate);

    const isHoveredPeriod = !(dates && 'startDate' in dates && 'endDate' in dates && dates.startDate && dates.endDate);

    const isSecondPickInPeriod = !!dates && ('startDate' in dates && !!dates.startDate && !('endDate' in dates));

    const endOfViewableMonth = endOfMonth(viewingDate);
    const startOfViewableMonth = startOfMonth(viewingDate);

    const isDayInPeriodLarge = (() => {
        if (!!startDate && !!endDate) {
            if (((isAfter(startDate, endOfViewableMonth) && (
                isAfter(day, endOfViewableMonth) || isEqual(day, endOfViewableMonth)
            )) || (
                isBefore(endDate, startOfViewableMonth) && (
                    isBefore(day, startOfViewableMonth) || isEqual(day, startOfViewableMonth)))
            )) {
                return false;
            }
            if ((isBefore(day, startOfViewableMonth) || isAfter(day, endOfViewableMonth))) {
                if (isSameISOWeek(day, startDate) || isSameISOWeek(day, endDate)) {
                    if (!isSameMonth(startDate, endDate) && ((
                        !isBefore(startDate, startOfViewableMonth) && isBefore(day, startOfViewableMonth))
                        || (!isAfter(endDate, endOfViewableMonth) && isAfter(day, endOfViewableMonth)))) {
                        return false;
                    }
                    return !isSameMonth(startDate, endDate);
                }
            }
        }
        return isDayInPeriod;
    })();

    return {
        isDaySelected,
        isPeriodSelected,
        isDayHovered,
        isDayInHoveredPeriod,
        isDayInViewableMonth,
        isDayInPeriod,
        isDayFirstInPeriod,
        isDayLastInPeriod,
        isEqualDays,
        isHoveredPeriod,
        isDayTrusted,
        isSecondPickInPeriod,
        isDayInPeriodLarge,
    };
};
