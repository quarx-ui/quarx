import { format } from 'date-fns';
import { SelectedDates } from '@core/components/experimental';
import { isPeriod } from '../types';

const parseTimeFromDate = (date: Date) => format(date, 'HH:mm:ss');

export const checkHour = (hour: number) => hour >= 0 && hour < 24;
export const checkMinute = (minute: number) => minute >= 0 && minute < 60;
export const checkSecond = (second: number) => second >= 0 && second < 60;

export const isValidTime = (hour: number, minutes: number, seconds: number) => checkHour(hour)
    && checkMinute(minutes) && checkSecond(seconds);

const parseOneDayPeriodPlaceholder = <D extends SelectedDates>(dates?: D) => {
    if (dates && isPeriod(dates) && dates.start && dates.end) {
        return `${parseTimeFromDate(dates.start)} – ${parseTimeFromDate(dates.end)}`;
    } if (dates && isPeriod(dates) && dates.start) {
        return `${parseTimeFromDate(dates.start)} – 23:59:59`;
    }
    return '00:00:00 – 23:59:59';
};

export const mapTypeToPlaceholder = <D extends SelectedDates>(selected?: D) => {
    if (isPeriod(selected)) {
        return parseOneDayPeriodPlaceholder(selected);
    }
    return selected ? parseTimeFromDate(selected) : '00:00:00';
};
