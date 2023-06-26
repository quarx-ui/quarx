import {
    EditablePeriodParts,
    InnerTimeSetters,
    PeriodSelectedDates,
    PickerSelectedDate,
} from '@core';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import {
    isEditingEndTime,
    isEditingStartTime,
} from '@core/src/main/DatePicker/components/Block/components/DatePickerRightSection/utils';
import { isValidTime } from '../../utils';
import { parseTimeParts } from '../FooterDatePicker/utils';

interface SetTimeByBadgeInPeriod {
    selected: PeriodSelectedDates;
    newTime: string;
    setTimes: InnerTimeSetters;
    editablePartOfPeriod: EditablePeriodParts;
}

// const isEditingStartTime = (
//     selected: PeriodSelectedDates, lastEditedDateTypeInPeriod?: LastEditedDateType,
// ) => selected.start && (!lastEditedDateTypeInPeriod || lastEditedDateTypeInPeriod === LAST_EDITED_DATE_TYPE.START);
//
// const isEditingEndTime = (
//     selected: PeriodSelectedDates, lastEditedDateTypeInPeriod?: LastEditedDateType,
// ) => lastEditedDateTypeInPeriod === LAST_EDITED_DATE_TYPE.END && selected.end;

export const getDateFromTimeByBadgeInPeriod = (
    { selected, newTime, setTimes, editablePartOfPeriod }: SetTimeByBadgeInPeriod,
): PeriodSelectedDates => {
    const timeWithSeconds = `${newTime}:00`;
    const [hour, minutes, seconds] = parseTimeParts(timeWithSeconds);
    if (isValidTime(hour, minutes, seconds)) {
        if (isEditingEndTime(selected, editablePartOfPeriod)) {
            setTimes.setEndTime(timeWithSeconds);
            return { ...selected, end: setHours(setMinutes(setSeconds(selected.end || new Date(), seconds), minutes), hour) };
        } if (isEditingStartTime(selected, editablePartOfPeriod)) {
            setTimes.setStartTime(timeWithSeconds);
            return { ...selected, start: setHours(setMinutes(setSeconds(selected.start || new Date(), seconds), minutes), hour) };
        }
    }
    return selected;
};

interface SetTimeByBadgeInPicker {
    selected: PickerSelectedDate;
    newTime: string;
    setTimes: InnerTimeSetters;
}
export const getDateFromTimeByBadgeInPicker = ({ selected, newTime, setTimes }: SetTimeByBadgeInPicker): PickerSelectedDate => {
    const timeWithSeconds = `${newTime}:00`;
    const [hour, minutes, seconds] = parseTimeParts(timeWithSeconds);
    if (isValidTime(hour, minutes, seconds)) {
        setTimes.setPickedTime(timeWithSeconds);
        return setHours(setMinutes(setSeconds(selected || new Date(), seconds), minutes), hour);
    }
    return selected;
};
