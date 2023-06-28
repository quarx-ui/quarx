import { Dispatch, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import { DatePickerStyleParams, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { Locale } from 'date-fns';
import { MonthBlockStyleKeys } from './styles';
import { DatePickerInnerComponentsProps, InnerTimeSetters, InnerTimeValues } from '../../types';

export type MonthBlockStyleProps = Pick<DatePickerStyleParams, 'size'>

export interface MonthBlockProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<MonthBlockStyleKeys, MonthBlockStyleProps>,
    Omit<DatePickerInnerComponentsProps<D>, 'setViewingDate' | 'styles'> {
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    locale?: Locale;
}
