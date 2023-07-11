import { useMemo } from 'react';
import { addDays, differenceInDays, endOfISOWeek, endOfMonth, startOfISOWeek, startOfMonth } from 'date-fns';

export const getMonthData = (viewingDate: Date) : Date[][] => {
    const leftDay = startOfISOWeek(startOfMonth(viewingDate));
    const rightDay = endOfISOWeek(endOfMonth(viewingDate));
    const countOfDaysInMonthData = differenceInDays(rightDay, leftDay) + 1;
    return Array.from({
        length: countOfDaysInMonthData / 7,
    }, (_, numWeek) => Array.from({
        length: 7,
    }, (__, numDay) => addDays(leftDay, numWeek * 7 + numDay)));
};

export const useMonthData = (viewingDate: Date) => useMemo(() => getMonthData(viewingDate), [viewingDate]);
