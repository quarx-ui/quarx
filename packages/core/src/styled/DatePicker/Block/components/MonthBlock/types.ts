import { Dispatch, SetStateAction } from 'react';
import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams,
    InnerTimeSetters,
    InnerTimeValues,
    WithClassesAndStyles,
} from '@core';
import { Locale } from 'date-fns';
import { MonthBlockStyleKeys } from './styles';

export type MonthBlockStyleProps = Pick<DatePickerStyleParams, 'size'>

export interface MonthBlockProps extends WithClassesAndStyles<MonthBlockStyleKeys, MonthBlockStyleProps>,
    Omit<DatePickerInnerComponentsProps, 'setViewingDate' | 'styles'> {
    hoveredDay?: Date,
    setHoveredDay?: Dispatch<SetStateAction<Date | undefined>>,
    times: InnerTimeValues
    setTimes: InnerTimeSetters,
    locale?: Locale,
}
