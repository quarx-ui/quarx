import { DatePickerBlockProps, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { isMultiple, isPicker } from '@core/src/experimental/DatePicker/components/Block/types';
import {
    PLACEHOLDER_DATE,
    PLACEHOLDER_DATETIME,
    PLACEHOLDER_DATETIME_WITH_SECONDS,
} from './constants';

export const getPlaceholderDate = (
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    if (withTime && withSeconds) {
        return PLACEHOLDER_DATETIME_WITH_SECONDS;
    }
    if (withTime) {
        return PLACEHOLDER_DATETIME;
    }
    return PLACEHOLDER_DATE;
};

export const getPlaceholder = <D extends SelectedDates = PickerSelectedDate>(
    selected: D,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
): string => {
    if (isPicker(selected)) {
        return getPlaceholderDate(withTime, withSeconds);
    } if (isMultiple(selected)) {
        return Array.from({ length: selected.length + 1 })
            .map(() => getPlaceholderDate(withTime, withSeconds)).join(', ');
    }
    return `${getPlaceholderDate(withTime, withSeconds)} - ${getPlaceholderDate(withTime, withSeconds)}`;
};
