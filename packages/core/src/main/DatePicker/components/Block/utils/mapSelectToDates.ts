import { isAfter, parse } from 'date-fns';
import {
    InnerTimeValues, InnerTimeSetters, PeriodSelectedDates, PickerSelectedDate, SelectedDates, isPeriod,
    EditablePeriodParts, EDITABLE_PERIOD_PARTS, PeriodChangingFlow, PERIOD_CHANGING_FLOW,
} from '@core';
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

const getEndSelected = (
    date: Date,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    selected: PeriodSelectedDates,
    onChangeEditablePartOfPeriod: (part: EditablePeriodParts) => void,
    checkedTimes: Record<string, string>,
    flowToChangingAfterPickDay: PeriodChangingFlow[],
    periodChangingFlow: PeriodChangingFlow,
    pickNewSelectedAfterEndDatePick: boolean,
) => {
    console.log(date, selected.start);
    if (selected.start) {
        if (isAfter(date, selected.start)) {
            if (flowToChangingAfterPickDay.includes(periodChangingFlow)) {
                onChangeEditablePartOfPeriod(
                    pickNewSelectedAfterEndDatePick ? EDITABLE_PERIOD_PARTS.START : EDITABLE_PERIOD_PARTS.END,
                );
            }
            return {
                start: setDateTime(selected.start, checkedTimes.startTime),
                end: setDateTime(date, checkedTimes.endTime),
            };
        }
        if (flowToChangingAfterPickDay.includes(periodChangingFlow)) {
            onChangeEditablePartOfPeriod(EDITABLE_PERIOD_PARTS.START);
        }
        const prevStartTime = times.startTime;
        setTimes.setStartTime(prevStartTime);
        setTimes.setEndTime(checkedTimes.endTime);
        return { start: setDateTime(date, times.startTime),
            end: setDateTime(selected.start, times.endTime || checkedTimes.endTime) };
    }
    return {
        end: setDateTime(date, times.endTime || checkedTimes.endTime),
    };
};

export const mergeSelectedDatesWithPeriodDates = (
    date: Date,
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    selected: PeriodSelectedDates,
    periodChangingFlow: PeriodChangingFlow,
    editablePartOfPeriod: EditablePeriodParts | undefined,
    onChangeEditablePartOfPeriod: (part: EditablePeriodParts) => void,
    clearAllAfterChangingStartDate: boolean,
    pickNewSelectedAfterEndDatePick: boolean,
): PeriodSelectedDates => {
    const checkedTimes = checkTime(times, setTimes, selected);
    const flowToChangingAfterPickDay: PeriodChangingFlow[] = [
        PERIOD_CHANGING_FLOW.AFTER_DAY, PERIOD_CHANGING_FLOW.AFTER_EACH];
    if (editablePartOfPeriod === EDITABLE_PERIOD_PARTS.START) {
        if (flowToChangingAfterPickDay.includes(periodChangingFlow)) {
            onChangeEditablePartOfPeriod(EDITABLE_PERIOD_PARTS.END);
        }
        setTimes.setEndTime('');
        return { ...(clearAllAfterChangingStartDate ? {} : selected), start: setDateTime(date, checkedTimes.startTime) };
    }
    if (editablePartOfPeriod === EDITABLE_PERIOD_PARTS.END) {
        return getEndSelected(date, times, setTimes, selected, onChangeEditablePartOfPeriod, checkedTimes,
            flowToChangingAfterPickDay, periodChangingFlow, pickNewSelectedAfterEndDatePick);
    }
    return {};
    // if (!selected
    //     || (selected && (!selected.start || (selected.end && selected.start))
    //     )) {
    //     setTimes.setEndTime('');
    //     setLastEditedDateTypeInPeriod(LAST_EDITED_DATE_TYPE.START);
    //     return {
    //         start: setDateTime(date, checkedTimes.startTime),
    //     };
    // } if (selected.start && !selected.end) {
    //     return getEndSelected(date, times, setTimes, selected, setLastEditedDateTypeInPeriod, checkedTimes);
    // }
    // onChangeEditablePartOfPeriod(LAST_EDITED_DATE_TYPE.START);
    // setTimes.setEndTime('');
    // setTimes.setStartTime('');
    // setLastEditedDateTypeInPeriod(undefined);
    // return {};
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
    periodChangingFlow: PeriodChangingFlow,
    editablePartOfPeriod: EditablePeriodParts,
    onChangeEditablePartOfPeriod: (part: EditablePeriodParts) => void,
    clearAllAfterChangingStartDate: boolean,
    pickNewSelectedAfterEndDatePick: boolean,
): D => {
    if (isPeriod(selected)) {
        return mergeSelectedDatesWithPeriodDates(date, times, setTimes, selected,
            periodChangingFlow, editablePartOfPeriod, onChangeEditablePartOfPeriod, clearAllAfterChangingStartDate,
            pickNewSelectedAfterEndDatePick) as D;
    }
    return mergeSelectedDateWithPickedDate(date, times, setTimes, selected) as D;
};
