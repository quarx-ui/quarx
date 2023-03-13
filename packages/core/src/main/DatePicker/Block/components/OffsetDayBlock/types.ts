import { DatePickerInnerComponentsProps, DatePickerStyleParams, DatePickerTimeTypes, WithClassesAndStyles } from '@core';
import { UseDayPropertiesProps } from '../../utils/useDayProperties';
import { OffsetDayStyleKeys } from './styles';

type CommonDatePicker = Pick<DatePickerStyleParams, 'size' | 'isLarge' | 'useIncreasedScopeDay'>

export interface OffsetDayStyleParams extends CommonDatePicker {
    isDayInPeriod: boolean;
    isDayLastInPeriod: boolean;
    isEqualDays: boolean;
    isHoveredPeriod: boolean;
    isWeekdayName?: boolean;
    isDayInPeriodLarge: boolean;
}

export interface OffsetDayBlockProps<T extends DatePickerTimeTypes, D> extends WithClassesAndStyles<OffsetDayStyleKeys, OffsetDayStyleParams>,
    Pick<DatePickerInnerComponentsProps<T, D>, 'innerStyles'>, UseDayPropertiesProps, CommonDatePicker {
    numDay: number;
    isWeekdayName?: boolean;
    isLarge?: boolean;
}
