import { DatePickerStyleParams } from '@core/src/experimental';

export interface DropdownDatePickerStyleParams extends Pick<DatePickerStyleParams, 'size' | 'borderRadius'> {
    countWeeksInMonth: number;
}
