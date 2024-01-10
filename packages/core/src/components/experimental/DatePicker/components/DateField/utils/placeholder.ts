import { DatePickerBlockProps } from '@core/components/experimental';
import {
    PLACEHOLDER_DATE,
    PLACEHOLDER_DATETIME,
    PLACEHOLDER_DATETIME_WITH_SECONDS,
} from './constants';

const getPlaceholderDate = (
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

export const getPlaceholder = (
    isPickerType: boolean,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    if (isPickerType) {
        return getPlaceholderDate(withTime, withSeconds);
    }
    return `${getPlaceholderDate(withTime, withSeconds)} - ${getPlaceholderDate(withTime, withSeconds)}`;
};
