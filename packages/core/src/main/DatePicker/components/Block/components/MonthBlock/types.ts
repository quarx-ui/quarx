import { Dispatch, SetStateAction } from 'react';
import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams,
    InnerTimeSetters,
    InnerTimeValues, PickerSelectedDate, SelectedDates, SetLastEditedDateType,
    WithClassesAndStyles,
} from '@core';
import { Locale } from 'date-fns';
import { LastEditedDateType } from '@core/src/main/DatePicker/Block/utils';
import { MonthBlockStyleKeys } from './styles';

export type MonthBlockStyleProps = Pick<DatePickerStyleParams, 'size'>

export interface MonthBlockProps<D extends SelectedDates = PickerSelectedDate> extends WithClassesAndStyles<MonthBlockStyleKeys, MonthBlockStyleProps>,
    Omit<DatePickerInnerComponentsProps<D>, 'setViewingDate' | 'styles'> {
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    locale?: Locale;
    setLastEditedDateTypeInPeriod: SetLastEditedDateType;
}
