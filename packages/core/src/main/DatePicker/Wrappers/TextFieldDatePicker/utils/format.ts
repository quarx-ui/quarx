import { DatePickerProps, isPicker, SelectedDatesDatePicker } from '@core';
import { format } from 'date-fns';
import { getPlaceholder } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/utils/placeholder';
import { getFormat } from './common';

const getFormatMaskDate = (withTime: DatePickerProps['withTime']) => (withTime ? '##.##.#### ##:##' : '##.##.####');

export const getFormatValue = (isPickerType: boolean, withTime: DatePickerProps['withTime']) => {
    if (isPickerType) {
        return getFormatMaskDate(withTime);
    }
    return `${getFormatMaskDate(withTime)} - ${getFormatMaskDate(withTime)}`;
};

export const getMask = (isPickerType: boolean, withTime: DatePickerProps['withTime']) => getPlaceholder(isPickerType, withTime).split('').filter((symbol) => symbol.match(/[ДМГ]/g));

export const mapSelectedToTextFieldValue = <D extends SelectedDatesDatePicker>(selected: D, withTime: DatePickerProps['withTime']) => {
    const formatValue = getFormat(withTime);
    if (isPicker(selected) && selected) {
        return format(selected, formatValue);
    } if (selected?.start && selected?.end) {
        return `${format(selected.start, formatValue)} - ${format(selected.end, formatValue)}`;
    } if (selected?.start) {
        return format(selected.start, formatValue);
    }

    return '';
};
