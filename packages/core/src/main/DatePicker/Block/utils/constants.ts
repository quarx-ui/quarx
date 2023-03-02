import { getDateFnsLocale } from '@core';
import { getStrictMonthNamesByLocale, getStrictWeekdayNamesByLocale } from '.';
import { DatePickerSize } from '..';

export const INITIAL_WEEKDAYS = () => getStrictWeekdayNamesByLocale(getDateFnsLocale('ru'));
export const YEARS = Array.from({ length: 60 }, (_, i) => 1990 + i);
export const INITIAL_MONTHS = () => getStrictMonthNamesByLocale(getDateFnsLocale('ru'));
export const DATE_PICKER_DAY_SIZE_PX: Record<DatePickerSize, number> = {
    small: 32,
    medium: 36,
    large: 40,
};

export const OFFSET_ROOT: Record<DatePickerSize, number> = {
    small: 12,
    medium: 12,
    large: 16,
};

export const OFFSET_MONTH_BLOCK: Record<DatePickerSize, number> = {
    small: 12,
    medium: 16,
    large: 20,
};

export const BORDER_SIZE_ROOT = 1;
