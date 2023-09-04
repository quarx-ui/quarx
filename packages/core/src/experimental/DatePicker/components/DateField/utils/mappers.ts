import { DatePickerBlockProps, PeriodSelectedDates, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { format } from 'date-fns';
import { DateFieldTexts } from '@core/src/experimental/DatePicker/components/DateField/types';
import { getFormat, getDate, SetErrorText } from './common';
import { isPicker } from '../../Block/types';

export const mapSelectedToTextFieldValue = <D extends SelectedDates>(
    selected: D,
    withTime: DatePickerBlockProps['withTime'],
    withSeconds: DatePickerBlockProps['withSeconds'],
) => {
    const formatValue = getFormat(withTime, withSeconds);
    if (isPicker(selected) && selected) {
        return format(selected, formatValue);
    } if (selected?.start && selected?.end) {
        return `${format(selected.start, formatValue)} - ${format(selected.end, formatValue)}`;
    } if (selected?.start) {
        return format(selected.start, formatValue);
    }

    return '';
};

export type MapValueToTypeSelected<D extends SelectedDates> = Omit<MapTextFieldValueToSelectedProps<D>, 'isSingleDate'>

const mapValueToPickerSelected = ({
    value,
    withTime,
    withSeconds,
    setErrorText,
    errorsFromInput,
}: MapValueToTypeSelected<PickerSelectedDate>): PickerSelectedDate => {
    if (value && !value.includes('_')) {
        const newDate = getDate<PickerSelectedDate>(
            value, withTime, withSeconds, setErrorText, errorsFromInput.errorByValidationSingleDate,
        );
        return newDate;
    }
    return undefined;
};

const mapValueToPeriodSelected = (
    { value, withTime, withSeconds, setErrorText, errorsFromInput }: MapValueToTypeSelected<PeriodSelectedDates>,
): PeriodSelectedDates => {
    if (!value) { return {}; }
    const [start, end] = value.split(' - ').map((dateValue, index) => getDate(dateValue, withTime, withSeconds, setErrorText,
        index === 0 ? errorsFromInput.errorByValidateFirstDate : errorsFromInput.errorByValidateLastDate));
    if (start && end) {
        return { start, end };
    } if (start) {
        return { start };
    }
    return {};
};

export interface MapTextFieldValueToSelectedProps<D extends SelectedDates> extends
    Pick<DatePickerBlockProps<D>, 'withTime' | 'withSeconds'>
{
    value: string;
    isSingleDate: boolean;
    setErrorText: SetErrorText;
    errorsFromInput: Required<DateFieldTexts>;
}

export const mapTextFieldValueToSelected = <D extends SelectedDates>(
    { isSingleDate, ...props }: MapTextFieldValueToSelectedProps<D>,
): D => (isSingleDate ? mapValueToPickerSelected(props) as D
    : mapValueToPeriodSelected(props) as D);
