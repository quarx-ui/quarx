import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams,
    DatePickerTimeTypes, PickerSelectedDate,
    SelectedDates,
    WithClassesAndStyles,
} from '@core';
import { UseDayPropertiesProps } from '../../utils/useDayProperties';
import { OffsetDayStyleKeys } from './styles';

type CommonDatePicker = Pick<DatePickerStyleParams, 'size'>

export interface OffsetDayStyleParams extends CommonDatePicker {
    isDayInPeriod: boolean;
    isDayLastInPeriod: boolean;
    isEqualDays: boolean;
    isHoveredPeriod: boolean;
    isWeekdayName?: boolean;
    isDayInPeriodLarge: boolean;
    isLarge?: boolean;
    useIncreasedScopeDay?: boolean;
}

export interface OffsetDayBlockProps<D extends SelectedDates = PickerSelectedDate> extends WithClassesAndStyles<OffsetDayStyleKeys, OffsetDayStyleParams>,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'>, UseDayPropertiesProps<D>, CommonDatePicker {
    numDay: number;
    isWeekdayName?: boolean;
    isLarge?: boolean;
    useIncreasedScopeDay?: boolean;
}
