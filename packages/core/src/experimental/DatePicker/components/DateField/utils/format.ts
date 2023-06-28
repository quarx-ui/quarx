import { DatePickerProps } from '@core/src/experimental';
import { getPlaceholder } from './placeholder';

const getFormatMaskDate = (withTime: DatePickerProps['withTime']) => (withTime ? '##.##.#### ##:##' : '##.##.####');

export const getFormatValue = (isSingleDate: boolean, withTime: DatePickerProps['withTime']) => {
    if (isSingleDate) {
        return getFormatMaskDate(withTime);
    }
    return `${getFormatMaskDate(withTime)} - ${getFormatMaskDate(withTime)}`;
};

export const getMask = (
    isSingleDate: boolean, withTime: DatePickerProps['withTime'],
) => getPlaceholder(isSingleDate, withTime).split('').filter((symbol) => symbol.match(/[ДМГЧ]/g));
