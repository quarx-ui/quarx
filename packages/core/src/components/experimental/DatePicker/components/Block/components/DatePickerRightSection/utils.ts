import { EDITABLE_PERIOD_PARTS, EditablePeriodParts, PeriodSelectedDates, SelectedDates } from '@core/components/experimental';
import { InnerTimeValues, isPicker } from '../../types';

export const isEditingStartTime = (
    selected: PeriodSelectedDates, editablePeriodPart?: EditablePeriodParts,
) => (!editablePeriodPart || editablePeriodPart === EDITABLE_PERIOD_PARTS.START);

export const isEditingEndTime = (
    selected: PeriodSelectedDates, editablePeriodPart?: EditablePeriodParts,
) => editablePeriodPart === EDITABLE_PERIOD_PARTS.END;

export const getTimeOfSelectedDate = <D extends SelectedDates>(
    time: InnerTimeValues, selected: D, lastEditedDateTypeInPeriod?: EditablePeriodParts,
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
    time: InnerTimeValues, selected: D, editablePeriodPart?: EditablePeriodParts,
) => getTimeOfSelectedDate(time, selected, editablePeriodPart)?.substring(0, 5);
