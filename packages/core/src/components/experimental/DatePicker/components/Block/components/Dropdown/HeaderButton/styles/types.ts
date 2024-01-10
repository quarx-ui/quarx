import { DatePickerStyleParams } from '@core/components/experimental';

export interface DropdownButtonStyleParams extends Pick<DatePickerStyleParams, 'borderRadius' | 'size'>{
    isOpen: boolean;
    disable?: boolean;
}
