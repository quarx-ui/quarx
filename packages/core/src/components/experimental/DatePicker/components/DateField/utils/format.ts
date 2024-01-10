import { DatePickerBlockProps } from '@core/components/experimental';
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

export const getFormatValue = (
    isSingleDate: boolean,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    if (isSingleDate) {
        return getFormatMaskDate(withTime, withSeconds);
    }
    return `${getFormatMaskDate(withTime, withSeconds)} - ${getFormatMaskDate(withTime, withSeconds)}`;
};

export const getMask = (
    isSingleDate: boolean,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => getPlaceholder(isSingleDate, withTime, withSeconds).split('').filter((symbol) => symbol.match(/[ДМГЧС]/g));
