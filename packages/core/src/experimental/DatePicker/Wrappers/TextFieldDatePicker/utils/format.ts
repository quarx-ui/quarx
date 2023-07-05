import { DatePickerProps } from '@core/src/experimental';

const getFormatMaskDate = (withTime: DatePickerProps['withTime']) => (withTime ? '##.##.#### ##:##' : '##.##.####');

export const getFormatValue = (isPickerType: boolean, withTime: DatePickerProps['withTime']) => {
    if (isPickerType) {
        return getFormatMaskDate(withTime);
    }
    return `${getFormatMaskDate(withTime)} - ${getFormatMaskDate(withTime)}`;
};