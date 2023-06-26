import { Dispatch, SetStateAction } from 'react';
import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams,
    DatePickerTimeTypes,
    InnerTimeSetters,
    InnerTimeValues, PickerSelectedDate, SelectedDates, WithClassesAndStyles,
} from '@core';
import { DayStyleKeys } from './styles';

export interface DayBlockProps<D extends SelectedDates = PickerSelectedDate> extends WithClassesAndStyles<DayStyleKeys, DayStylesParams>,
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
    useBigPressScope: boolean;
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
