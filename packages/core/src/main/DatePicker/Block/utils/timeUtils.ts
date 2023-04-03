import { format } from 'date-fns';
import { isPeriod, SelectedDatesDatePicker } from '@core';

const parseTimeFromDate = (date: Date) => format(date, 'HH:mm:ss');

export const parseDateTime = (date: Date) => format(date, '');

const parseOneDayPeriodPlaceholder = <D extends SelectedDatesDatePicker>(dates?: D) => {
    if (dates && isPeriod(dates) && dates.start && dates.end) {
        return `${parseTimeFromDate(dates.start)} – ${parseTimeFromDate(dates.end)}`;
    } if (dates && isPeriod(dates) && dates.start) {
        return `${parseTimeFromDate(dates.start)} – 23:59:59`;
    }
    return '00:00:00 – 23:59:59';
};

export const mapTypeToPlaceholder = <D extends SelectedDatesDatePicker>(selected?: D) => {
    if (isPeriod(selected)) {
        return parseOneDayPeriodPlaceholder(selected);
    }
    return selected ? parseTimeFromDate(selected) : '00:00:00';
};

// export const mapTypeToMask = (type : DatePickerTimeTypes): string => {
//     switch (type) {
//         case DATE_PICKER_TIME_TYPES.PERIOD:
//             return '99:99:99 – 99:99:99';
//         case DATE_PICKER_TIME_TYPES.PICKER:
//             return '99:99:99';
//         default:
//             return '';
//     }
// };
