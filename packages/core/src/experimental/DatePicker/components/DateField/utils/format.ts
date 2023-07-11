import { DatePickerBlockProps } from '@core/src/experimental';
import { getPlaceholder } from './placeholder';

const getFormatMaskDate = (withTime: DatePickerBlockProps['withTime']) => (withTime
    ? '##.##.#### ##:##' : '##.##.####');

export const getFormatValue = (isSingleDate: boolean, withTime: DatePickerBlockProps['withTime']) => {
    if (isSingleDate) {
        return getFormatMaskDate(withTime);
    }
    return `${getFormatMaskDate(withTime)} - ${getFormatMaskDate(withTime)}`;
};

export const getMask = (
    isSingleDate: boolean, withTime: DatePickerBlockProps['withTime'],
) => getPlaceholder(isSingleDate, withTime).split('').filter((symbol) => symbol.match(/[ДМГЧ]/g));
