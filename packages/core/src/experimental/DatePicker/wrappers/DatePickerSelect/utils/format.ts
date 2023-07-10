import { DatePickerBlockProps } from '@core/src/experimental';
import { MASK_DATE, MASK_DATETIME } from './constants';

const getFormatMaskDate = (withTime: DatePickerBlockProps['withTime']) => (withTime ? MASK_DATETIME : MASK_DATE);

export const getFormatValue = (isPickerType: boolean, withTime: DatePickerBlockProps['withTime']) => {
    if (isPickerType) {
        return getFormatMaskDate(withTime);
    }
    return `${getFormatMaskDate(withTime)} - ${getFormatMaskDate(withTime)}`;
};
