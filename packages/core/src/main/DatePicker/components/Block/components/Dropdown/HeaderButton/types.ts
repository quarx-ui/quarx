import {
    DatePickerInnerComponentsProps,
    DatePickerStyleParams, PickerSelectedDate,
    SelectedDates,
    WithClassesAndStyles,
} from '@core';
import { DropdownItemDatePicker } from '../../../utils';
import { DropdownDatePickerTypes } from '..';
import { DropdownButtonStyleKeys } from './styles';

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
