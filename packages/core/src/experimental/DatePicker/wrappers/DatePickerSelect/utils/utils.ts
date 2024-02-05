import { PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { isMultiple, isPicker } from '@core/src/experimental/DatePicker/components/Block/types';

export const parseActualViewingDate = <D extends SelectedDates = PickerSelectedDate>(selected: D) => {
    if (isPicker(selected)) {
        return selected;
    } if (isMultiple(selected)) {
        return selected[selected.length - 1];
    }
    return selected?.end || selected.start;
};
