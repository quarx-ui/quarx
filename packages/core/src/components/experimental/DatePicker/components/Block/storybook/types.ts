import { DatePickerBlockProps, SelectedDates } from '@core/components/experimental';

export type DatePickerStoryType = Omit<DatePickerBlockProps<SelectedDates>, 'onChange' | 'selected'>;
