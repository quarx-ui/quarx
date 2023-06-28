import { DatePickerProps, SelectedDates } from '@core/src/experimental';

export type DatePickerStoryType = Omit<DatePickerProps<SelectedDates>, 'onChange' | 'selected'>;
