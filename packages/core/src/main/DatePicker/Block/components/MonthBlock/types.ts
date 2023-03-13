import { Dispatch, SetStateAction } from 'react';
import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams, DatePickerTimeTypes,
    InnerTimeSetters,
    InnerTimeValues,
    WithClassesAndStyles,
} from '@core';
import { Locale } from 'date-fns';
import { MonthBlockStyleKeys } from './styles';

export type MonthBlockStyleProps = Pick<DatePickerStyleParams, 'size'>

export interface MonthBlockProps<T extends DatePickerTimeTypes, D> extends WithClassesAndStyles<MonthBlockStyleKeys, MonthBlockStyleProps>,
    Omit<DatePickerInnerComponentsProps<T, D>, 'setViewingDate' | 'styles'> {
    hoveredDay?: Date;
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    locale?: Locale;
}
