import { Dispatch, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/components/experimental';
import { Locale } from 'date-fns';
import { DatePickerInnerComponentsProps, InnerTimeSetters, InnerTimeValues } from '../../types';
import { MonthBlockStyleParams } from './styles/types';
import { MonthBlockStyleKeys } from './styles/index';

type CommonPropsToMonthBlock<D extends SelectedDates> = Omit<
DatePickerInnerComponentsProps<D>, 'setViewingDate' | 'styles'
>

export interface MonthBlockProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<MonthBlockStyleKeys, MonthBlockStyleParams>,
    CommonPropsToMonthBlock<D> {
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    locale?: Locale;
}
