import { DatePickerBlockProps, SelectedDates } from '@core/src/experimental';

export type DatePickerStoryType = Omit<DatePickerBlockProps<SelectedDates>, 'onChange' | 'selected'>;
