import { Dispatch, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/components/experimental';
import { DayStylesParams } from './styles/types';
import { InnerTimeSetters, InnerTimeValues, DatePickerInnerComponentsProps } from '../../types';
import { DayStyleKeys } from './styles';

type CommonDatePickerPropsToDay<D extends SelectedDates> = Omit<DatePickerInnerComponentsProps<D>,
'setViewingDate' | 'styles'>;

export interface DayBlockProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<DayStyleKeys, DayStylesParams>,
    CommonDatePickerPropsToDay<D>
{
    currentDay: Date;
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    numDay: number;
}
