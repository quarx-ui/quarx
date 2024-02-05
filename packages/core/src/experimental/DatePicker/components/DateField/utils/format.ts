import { DatePickerBlockProps, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { isMultiple, isPicker } from '@core/src/experimental/DatePicker/components/Block/types';
import { getPlaceholder } from './placeholder';
import {
    MASK_DATE,
    MASK_DATETIME,
    MASK_DATETIME_WITH_SECONDS,
} from './constants';

const getFormatMaskDate = (
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    if (withTime && withSeconds) {
        return MASK_DATETIME_WITH_SECONDS;
    }
    if (withTime) {
        return MASK_DATETIME;
    }
    return MASK_DATE;
};

export const getFormatValue = <D extends SelectedDates = PickerSelectedDate>(
    selected: D,
    isSingleDate: boolean,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    if (isPicker(selected) || isSingleDate) {
        return getFormatMaskDate(withTime, withSeconds);
    }
    if (isMultiple(selected)) {
        return Array.from({ length: selected.length + 1 })
            .map(() => getFormatMaskDate(withTime, withSeconds)).join(', ');
    }
    return `${getFormatMaskDate(withTime, withSeconds)} - ${getFormatMaskDate(withTime, withSeconds)}`;
};

export const getMask = <D extends SelectedDates = PickerSelectedDate>(
    selected: D,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => getPlaceholder(selected, withTime, withSeconds).split('').filter((symbol) => symbol.match(/[ДМГЧС]/g));
