import {
    InnerTimeValues,
    isPicker,
    PeriodSelectedDates,
    SelectedDates,
} from '@core';
import { LAST_EDITED_DATE_TYPE, LastEditedDateType } from '../../utils';

const isEditingStartTime = (
    selected: PeriodSelectedDates, lastEditedDateTypeInPeriod?: LastEditedDateType,
) => selected.start && (!lastEditedDateTypeInPeriod || lastEditedDateTypeInPeriod === LAST_EDITED_DATE_TYPE.START);

const isEditingEndTime = (
    selected: PeriodSelectedDates, lastEditedDateTypeInPeriod?: LastEditedDateType,
) => lastEditedDateTypeInPeriod === LAST_EDITED_DATE_TYPE.END && selected.end;

export const getTimeOfSelectedDate = <D extends SelectedDates>(
    time: InnerTimeValues, selected: D, lastEditedDateTypeInPeriod?: LastEditedDateType,
) => {
    if (isPicker(selected)) {
        return time.pickedTime;
    }
    if (isEditingEndTime(selected, lastEditedDateTypeInPeriod)) {
        return time.endTime;
    }
    if (isEditingStartTime(selected, lastEditedDateTypeInPeriod)) {
        return time.startTime;
    }
    return undefined;
};

export const getSelectedTimeWithoutSeconds = <D extends SelectedDates>(
    time: InnerTimeValues, selected: D, lastEditedDateTypeInPeriod?: LastEditedDateType,
) => getTimeOfSelectedDate(time, selected, lastEditedDateTypeInPeriod)?.substring(0, 5);
