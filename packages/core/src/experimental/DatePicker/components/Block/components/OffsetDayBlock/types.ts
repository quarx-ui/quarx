import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { UseDayPropertiesProps } from '../../utils/useDayProperties';
import { DatePickerSizeInterface, OffsetDayStyleKeys, OffsetDayStyleParams } from './styles/types';
import { DatePickerInnerComponentsProps } from '../../types';

export interface OffsetDayBlockProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<OffsetDayStyleKeys, OffsetDayStyleParams>,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'>,
    UseDayPropertiesProps<D>,
    DatePickerSizeInterface {
    numDay: number;
    isWeekdayName?: boolean;
    isLarge?: boolean;
    bigPressScope?: boolean;
}
