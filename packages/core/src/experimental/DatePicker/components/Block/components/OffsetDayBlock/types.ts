import { WithClassesAndStyles } from '@core';
import { DatePickerStyleParams, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { UseDayPropertiesProps } from '../../utils/useDayProperties';
import { OffsetDayStyleKeys } from './styles';
import { DatePickerInnerComponentsProps } from '../../types';

type CommonDatePicker = Pick<DatePickerStyleParams, 'size'>

export interface OffsetDayStyleParams extends CommonDatePicker {
    isDayInPeriod: boolean;
    isDayLastInPeriod: boolean;
    isEqualDays: boolean;
    isHoveredPeriod: boolean;
    isWeekdayName?: boolean;
    isDayInPeriodLarge: boolean;
    isLarge?: boolean;
    bigPressScope?: boolean;
}

export interface OffsetDayBlockProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<OffsetDayStyleKeys, OffsetDayStyleParams>,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'>,
    UseDayPropertiesProps<D>,
    CommonDatePicker {
    numDay: number;
    isWeekdayName?: boolean;
    isLarge?: boolean;
    bigPressScope?: boolean;
}
