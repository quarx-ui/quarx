import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/components/experimental';
import { DropdownItemDatePicker } from '../../../utils';
import { DropdownDatePickerTypes } from '../types';
import { DatePickerInnerComponentsProps } from '../../../types';
import { DropdownButtonStyleParams } from './styles/types';
import { DropdownButtonStyleKeys } from './styles';

export interface HeaderDatePickerDropdownProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<DropdownButtonStyleKeys, DropdownButtonStyleParams>, DropdownButtonStyleParams,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'> {
    onOpenDropdown: () => void;
    type: DropdownDatePickerTypes;
    viewingDate: Date;
    currentDropdown: DropdownItemDatePicker;
}
