import { DatePickerStyleParams } from '@core/src/experimental';

export interface DropdownButtonStyleParams extends Pick<DatePickerStyleParams, 'borderRadius' | 'size'>{
    isOpen: boolean;
    disable?: boolean;
}
