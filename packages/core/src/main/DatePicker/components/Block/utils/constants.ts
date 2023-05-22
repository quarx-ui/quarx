import { getDateFnsLocale, Values, valuesAsKeysFromArray } from '@core';
import { getStrictMonthNamesByLocale, getStrictWeekdayNamesByLocale } from '.';
import { DatePickerSize } from '..';

export const INITIAL_WEEKDAYS = () => getStrictWeekdayNamesByLocale(getDateFnsLocale('ru'));
export const YEARS = Array.from({ length: 60 }, (_, i) => 1980 + i);

const numberToTimeFormat = (number: number) => (number < 10 ? `0${number}` : number.toString());

export const TIMES_TO_TIME_BADGES = Array.from({ length: 4 * 24 }, (_, i) => {
    const hour = Math.floor(i / 4);
    const minute = (i % (hour < 4 ? 4 : hour)) * 15;
    return `${numberToTimeFormat(hour)}:${numberToTimeFormat(minute)}`;
});
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

export const LAST_EDITED_DATE_TYPE = valuesAsKeysFromArray(['START', 'END'] as const);

export type LastEditedDateType = Values<typeof LAST_EDITED_DATE_TYPE>
