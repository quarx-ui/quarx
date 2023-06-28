import { Dispatch, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import { DatePickerStyleParams, DatePickerTimeTypes, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DayStyleKeys } from './styles';
import { InnerTimeSetters, InnerTimeValues, DatePickerInnerComponentsProps } from '../../types';

export interface DayBlockProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<DayStyleKeys, DayStylesParams>,
    Omit<DatePickerInnerComponentsProps<D>, 'setViewingDate' | 'styles'>
{
    currentDay: Date;
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    numDay: number;
}

export interface DayStylesParams extends Omit<DatePickerStyleParams, 'countWeeksInMonth' | 'width'> {
    bigPressScope: boolean;
    isLarge: boolean;
    isMobile?: boolean;
    numDay: number;
    type: DatePickerTimeTypes;
    isDayInPeriod: boolean;
    isDayTrusted: boolean;
    isHoveredPeriod: boolean;
    isDayInHoveredPeriod: boolean;
    isEqualDays: boolean;
    isDayLastInPeriod: boolean;
    isDayFirstInPeriod: boolean;
    isPeriodSelected: boolean;
    isDayInViewableMonth: boolean;
    isDaySelected: boolean;
    isDayHovered: boolean;
    isSecondPickInPeriod: boolean;
    isDayInPeriodLarge: boolean;
}
