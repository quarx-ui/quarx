import { DatePickerBlockProps } from '@core/src/experimental';
import { PLACEHOLDER_DATE, PLACEHOLDER_DATETIME } from './constants';

const getPlaceholderDate = (withTime: DatePickerBlockProps['withTime']) => (withTime
    ? PLACEHOLDER_DATETIME : PLACEHOLDER_DATE);

export const getPlaceholder = (isPickerType: boolean, withTime: DatePickerBlockProps['withTime']) => {
    if (isPickerType) {
        return getPlaceholderDate(withTime);
    }
    return `${getPlaceholderDate(withTime)} - ${getPlaceholderDate(withTime)}`;
};
