import { DatePickerStyleParams } from '@core/components/experimental';

export interface DropdownDatePickerStyleParams extends Pick<DatePickerStyleParams, 'size' | 'borderRadius'> {
    countWeeksInMonth: number;
}
