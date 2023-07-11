import { format, Locale } from 'date-fns';

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getStrictMonthNamesByLocale = (locale: Locale) => Array.from({ length: 12 },
    (_, monthNumber) => capitalizeFirstLetter(format(
        new Date(2000, monthNumber, 1), 'LLLL', { locale },
    ).replace(/\./, '')));

export const getMonthNamesByLocale = (locale?: Locale) => (locale ? getStrictMonthNamesByLocale(locale) : undefined);

export const getStrictWeekdayNamesByLocale = (locale: Locale) => Array.from({ length: 7 },
    (_, dayNumber) => capitalizeFirstLetter(format(
        new Date(2022, 10, dayNumber), 'EEEEEE', { locale },
    ).replace(/\./, '')));

export const getWeekdayNamesByLocale = (locale?: Locale) => (
    locale ? getStrictWeekdayNamesByLocale(locale) : undefined
);
