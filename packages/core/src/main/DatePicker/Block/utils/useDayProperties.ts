import {
    DatePickerAllowedDates,
    DatePickerTimeTypes, isPeriod, isPicker, SelectedDatesDatePicker,
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

export interface UseDayPropertiesProps<D extends SelectedDatesDatePicker> {
    day: Date;
    selected?: D;
    hoveredDay?: Date;
    viewingDate: Date;
    allowedDates?: DatePickerAllowedDates;
}

export interface UseDayPropertiesReturn {
    isDaySelected: boolean;
    isPeriodSelected: boolean;
    isDayHovered: boolean;
    isDayInHoveredPeriod: boolean;
    isDayInViewableMonth: boolean;
    isDayInPeriod: boolean;
    isDayFirstInPeriod: boolean;
    isDayLastInPeriod: boolean;
    isEqualDays: boolean;
    isHoveredPeriod: boolean;
    isDayTrusted: boolean;
    isSecondPickInPeriod: boolean;
    isDayInPeriodLarge:boolean;
}

export type UseDayProperties = <D extends SelectedDatesDatePicker>(props: UseDayPropertiesProps<D>) => UseDayPropertiesReturn

export const mapPeriodAndHoverValues = <D extends SelectedDatesDatePicker>(
    dates?: D,
    hoveredDay?: Date,
): {selectedDate?: Date; startDate?: Date; endDate?: Date} => {
    if (!dates) {
        return {};
    }
    if (isPicker(dates) && dates) {
        return { selectedDate: dates };
    }

    if (isPeriod(dates) && dates.start && dates.end) {
        return {
            startDate: dates.start,
            endDate: dates.end,
        };
    }

    if (isPeriod(dates) && hoveredDay && dates.start) {
        return isAfter(hoveredDay, dates.start) ? {
            startDate: dates.start,
            endDate: hoveredDay,
        } : { startDate: hoveredDay,
            endDate: dates.start };
    }
    return {};
};

export const useDayProperties = <D extends SelectedDatesDatePicker>({ day, selected, hoveredDay, viewingDate,
    allowedDates }: UseDayPropertiesProps<D>) => {
    const { startDate, endDate, selectedDate } = mapPeriodAndHoverValues<D>(selected, hoveredDay);

    const isDaySelected = ((): boolean => {
        if (isPicker(selected) && selected) {
            return !!selectedDate && isSameDay(selectedDate, day);
        } if (isPeriod(selected)) {
            return (!!startDate && isSameDay(startDate, day)) || (!!endDate && isSameDay(endDate, day));
        }
        return false;
    })();

    const isPeriodSelected = ((): boolean => {
        if (isPicker(selected) && selected) {
            return !!selected && isSameDay(selected, day);
        } if (isPeriod(selected) && selected) {
            return !!selected.start && !!selected.end
                && (isSameDay(selected.start, day) || isSameDay(selected.end, day));
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

    const isDayInHoveredPeriod = !!(hoveredDay && isPeriod(selected) && selected.start);

    const isDayInViewableMonth = isSameMonth(day, viewingDate);

    const isDayInPeriod = !!startDate && !!endDate && day
        && isAfter(day, startDate) && isBefore(endOfDay(day), endDate);

    const isDayFirstInPeriod = !!startDate && !!endDate && !!day && isSameDay(day, startDate);

    const isDayLastInPeriod = !!startDate && !!endDate && day && isSameDay(day, endDate);

    const isEqualDays = !!endDate && !!startDate && isSameDay(endDate, startDate);

    const isHoveredPeriod = !(selected && isPeriod(selected) && selected.start && selected.end);

    const isSecondPickInPeriod = !!selected && ('start' in selected && !!selected.start && !('end' in selected));

    const startOfViewableMonth = startOfMonth(viewingDate);
    const endOfViewableMonth = endOfMonth(viewingDate);

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
