import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DropdownItemDatePicker } from '../../../utils';
import { DropdownDatePickerTypes } from '..';
import { DatePickerInnerComponentsProps } from '../../../types';
import { DropdownButtonStyleKeys, DropdownButtonStyleParams } from './styles/types';

export interface HeaderDatePickerDropdownProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<DropdownButtonStyleKeys, DropdownButtonStyleParams>, DropdownButtonStyleParams,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'> {
    onOpenDropdown: () => void;
    type: DropdownDatePickerTypes;
    viewingDate: Date;
    currentDropdown: DropdownItemDatePicker;
}
