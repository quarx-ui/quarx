import { isAfter, parse } from 'date-fns';
import {
    InnerTimeValues,
    InnerTimeSetters, PeriodSelectedDates, PickerSelectedDate, SelectedDates, isPeriod, SetLastEditedDateType,
} from '@core';
import { LAST_EDITED_DATE_TYPE } from './constants';
import { isCompletedTime } from '../components/FooterDatePicker/utils';

export const setDateTime = (date: Date, time: string) => parse(time, 'HH:mm:ss', date);

const checkTime = (times: InnerTimeValues, setTimes: InnerTimeSetters, selected?: PeriodSelectedDates) => {
    const newTimes: Record<string, string> = {};
    if (selected?.start && selected?.end) {
        return {
            startTime: '00:00:00',
            endTime: '23:59:59',
        };
    }
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
    setLastEditedDateTypeInPeriod: SetLastEditedDateType,
): PeriodSelectedDates => {
    const checkedTimes = checkTime(times, setTimes, selected);
    if (!selected
        || (selected && (!selected.start || (selected.end && selected.start))
        )) {
        setTimes.setEndTime('');
        setLastEditedDateTypeInPeriod(LAST_EDITED_DATE_TYPE.START);
        return {
            start: setDateTime(date, checkedTimes.startTime),
        };
    } if (selected.start && !selected.end) {
        if (isAfter(date, selected.start)) {
            setLastEditedDateTypeInPeriod(LAST_EDITED_DATE_TYPE.END);
            return {
                start: setDateTime(selected.start, checkedTimes.startTime),
                end: setDateTime(date, checkedTimes.endTime),
            };
        }
        const prevStartTime = times.startTime;
        setTimes.setStartTime(checkedTimes.endTime);
        setTimes.setEndTime(prevStartTime);
        setLastEditedDateTypeInPeriod(LAST_EDITED_DATE_TYPE.START);
        return { start: setDateTime(date, '00:00:00'),
            end: setDateTime(selected.start, prevStartTime) };
    }
    setTimes.setEndTime('');
    setTimes.setStartTime('');
    setLastEditedDateTypeInPeriod(undefined);
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

export const mergeDateWithSelected = <D extends SelectedDates>(
    date: Date,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    selected: D,
    setLastEditedDateTypeInPeriod: SetLastEditedDateType,
): D => {
    if (isPeriod(selected)) {
        return mergeSelectedDatesWithPeriodDates(date, times, setTimes, selected, setLastEditedDateTypeInPeriod) as D;
    }
    return mergeSelectedDateWithPickedDate(date, times, setTimes, selected) as D;
};
