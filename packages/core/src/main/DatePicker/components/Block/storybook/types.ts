import { DatePickerProps, SelectedDates } from '@core';

export type DatePickerStoryType = Omit<DatePickerProps<SelectedDates>, 'onChange' | 'selected'>;
