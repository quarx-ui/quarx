import { isAfter, parse } from 'date-fns';
import {
    DatePickerProps,
    InnerTimeValues,
    InnerTimeSetters,
    PickedDatesDatePicker,
    PickerTypeDates,
    PeriodTypeDates, DatePickerTimeTypes,
} from '@core';
import { DATE_PICKER_TIME_TYPES } from '..';
import { isCompletedTime } from '../components/FooterDatePicker/utils';

export const setDateTime = (date: Date, time: string) => parse(time, 'HH:mm:ss', date);

const checkTime = (times: InnerTimeValues, setTimes: InnerTimeSetters) => {
    const newTimes: Record<string, string> = {};
    Object.keys(times).forEach((key) => {
        if (!isCompletedTime(times[key as keyof InnerTimeValues])) {
            if (key === 'startTime' || key === 'pickedTime') {
                newTimes[key] = '00:00:00';
                setTimes[key === 'startTime' ? 'setStartTime' : 'setPickedTime']('00:00:00');
            } else if (key === 'endTime') {
                newTimes[key] = '23:59:59';
                setTimes.setEndTime('23:59:59');
            }
        } else {
            newTimes[key] = times[key as keyof InnerTimeValues];
        }
    });
    return newTimes;
};

export const mapSelectToDates = <T extends DatePickerTimeTypes, D extends PickedDatesDatePicker>(
    date: Date,
    type: T,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    dates?: D,
): PickedDatesDatePicker => {
    const checkedTimes = checkTime(times, setTimes);
    if (type === DATE_PICKER_TIME_TYPES.PERIOD) {
        if (!dates || (dates
            && (!('startDate' in dates)
                || ('startDate' in dates && 'endDate' in dates && dates.endDate && dates.startDate)))) {
            const a = {
                startDate: setDateTime(date, checkedTimes.startTime),
            };
            return a;
        } if ('startDate' in dates && !dates.endDate && dates.startDate) {
            return isAfter(date, dates.startDate) ? {
                startDate: setDateTime(dates.startDate, checkedTimes.startTime),
                endDate: setDateTime(date, checkedTimes.endTime),
            } : { startDate: setDateTime(date, checkedTimes.startTime),
                endDate: setDateTime(dates.startDate, checkedTimes.endTime) };
        }
    } if (type === DATE_PICKER_TIME_TYPES.PICKER) {
        if (dates && 'selectedDate' in dates && dates.selectedDate === date) {
            return {};
        }
        return {
            selectedDate: setDateTime(date, checkedTimes.pickedTime),
        };
    }
    return {};
};
