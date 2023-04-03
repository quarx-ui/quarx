import { Dispatch, SetStateAction } from 'react';
import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams,
    InnerTimeSetters,
    InnerTimeValues, PickerSelectedDate, SelectedDatesDatePicker,
    WithClassesAndStyles,
} from '@core';
import { Locale } from 'date-fns';
import { MonthBlockStyleKeys } from './styles';

export type MonthBlockStyleProps = Pick<DatePickerStyleParams, 'size'>

export interface MonthBlockProps<D extends SelectedDatesDatePicker = PickerSelectedDate> extends WithClassesAndStyles<MonthBlockStyleKeys, MonthBlockStyleProps>,
    Omit<DatePickerInnerComponentsProps<D>, 'setViewingDate' | 'styles'> {
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    locale?: Locale;
}
