import { DatePickerProps } from '@core';
import { parse } from 'date-fns';

export const getFormat = (withTime: DatePickerProps['withTime']) => (withTime ? 'dd.MM.yyyy hh:mm' : 'dd.MM.yyyy');

export const parseDateValue = (value: string, withTime: DatePickerProps['withTime']) => parse(value, getFormat(withTime), new Date());

export const validateDate = (value: string) => value && !value.match(/[^0-9. \s]/g);

export const getDate = (value: string, withTime: DatePickerProps['withTime']) => (validateDate(value) ? parseDateValue(value, withTime) : undefined);
