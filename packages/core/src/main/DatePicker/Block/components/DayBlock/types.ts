import { Dispatch, SetStateAction } from 'react';
import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams,
    DatePickerTimeTypes,
    InnerTimeSetters,
    InnerTimeValues, WithClassesAndStyles,
} from '@core';
import { DayStyleKeys } from './styles';

export interface DayBlockProps<T extends DatePickerTimeTypes, D> extends WithClassesAndStyles<DayStyleKeys, DayStylesParams>,
    Omit<DatePickerInnerComponentsProps<T, D>, 'setViewingDate' | 'styles'>{
    currentDay: Date;
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    numDay: number;
}

export interface DayStylesParams extends Omit<DatePickerStyleParams, 'countWeeksInMonth'> {
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
