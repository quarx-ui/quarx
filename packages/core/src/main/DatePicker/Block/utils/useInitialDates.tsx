import { useState } from 'react';
import { DatePickerProps, PickedDatesDatePicker } from '@core';
import { DATE_PICKER_TIME_TYPES } from '..';

export const useInitialDates = (type: DatePickerProps['type'], dates: DatePickerProps['pickedDates']) => {
    let parsedDates : PickedDatesDatePicker | undefined;
    if ((type === DATE_PICKER_TIME_TYPES.PICKER) && dates && 'selectedDate' in dates) {
        parsedDates = {
            selectedDate: dates.selectedDate,
        };
    } else if (dates && ('startDate' in dates || 'endDate' in dates)) {
        parsedDates = {
            startDate: dates.startDate || undefined,
            endDate: dates.endDate || undefined,
        };
    } else {
        parsedDates = undefined;
    }
    return useState<PickedDatesDatePicker | undefined>(parsedDates);
};
