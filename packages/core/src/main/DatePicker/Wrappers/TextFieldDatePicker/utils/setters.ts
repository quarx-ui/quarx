import { DatePickerProps, SelectedDatesDatePicker } from '@core';
import {
    mapTextFieldValueToSelected,
    MapTextFieldValueToSelectedProps,
} from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/utils/mappers';

export interface ChangeSelectedByValueProps<D extends SelectedDatesDatePicker> extends Pick<DatePickerProps<D>, 'onChange'>, MapTextFieldValueToSelectedProps<D> {
}

export const changeSelectedByValue = <D extends SelectedDatesDatePicker>({
    onChange,
    value,
    isPickerType,
    setViewingDate,
    withTime,
}: ChangeSelectedByValueProps<D>) => {
    const changedSelected = mapTextFieldValueToSelected({ value, isPickerType, withTime, setViewingDate });
    onChange(changedSelected);
};
