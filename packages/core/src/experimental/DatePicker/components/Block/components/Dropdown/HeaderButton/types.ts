import { WithClassesAndStyles } from '@core';
import { DatePickerStyleParams, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DropdownItemDatePicker } from '../../../utils';
import { DropdownDatePickerTypes } from '..';
import { DropdownButtonStyleKeys } from './styles';
import { DatePickerInnerComponentsProps } from '../../../types';

export interface DropdownButtonStyleParam extends Pick<DatePickerStyleParams, 'borderRadius' | 'size'>{
    isOpen: boolean;
    disable?: boolean;
}

export interface HeaderDatePickerDropdownProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<DropdownButtonStyleKeys, DropdownButtonStyleParam>, DropdownButtonStyleParam,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'> {
    onOpenDropdown: () => void;
    type: DropdownDatePickerTypes;
    isOpen: boolean;
    viewingDate: Date;
    currentDropdown: DropdownItemDatePicker;
}
