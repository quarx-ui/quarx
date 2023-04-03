import { isAfter, parse } from 'date-fns';
import {
    InnerTimeValues,
    InnerTimeSetters, PeriodSelectedDates, PickerSelectedDate, SelectedDatesDatePicker, isPeriod,
} from '@core';
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

export const mergeSelectedDatesWithPeriodDates = (
    date: Date,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    selected: PeriodSelectedDates,
): PeriodSelectedDates => {
    const checkedTimes = checkTime(times, setTimes);
    if (!selected
        || (selected && (
            !selected.start || (selected.end && selected.start))
        )) {
        return {
            start: setDateTime(date, checkedTimes.startTime),
        };
    } if (selected.start && !selected.end) {
        return isAfter(date, selected.start) ? {
            start: setDateTime(selected.start, checkedTimes.startTime),
            end: setDateTime(date, checkedTimes.endTime),
        } : { start: setDateTime(date, checkedTimes.startTime),
            end: setDateTime(selected.start, checkedTimes.endTime) };
    }
    return {};
};

export const mergeSelectedDateWithPickedDate = (
    date: Date,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    selected?: PickerSelectedDate,
): PickerSelectedDate => {
    if (selected && selected === date) {
        return undefined;
    }
    const checkedTimes = checkTime(times, setTimes);
    return setDateTime(date, checkedTimes.pickedTime);
};

export const mergeDateWithSelected = <D extends SelectedDatesDatePicker>(
    date: Date,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    selected: D,
): SelectedDatesDatePicker => {
    if (isPeriod(selected)) {
        return mergeSelectedDatesWithPeriodDates(date, times, setTimes, selected);
    }
    return mergeSelectedDateWithPickedDate(date, times, setTimes, selected);
};
