import { valuesAsKeysFromArray, WithClassesAndStyles } from '@core';
import { SelectedDates, PickerSelectedDate } from '@core/src/experimental';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { DropdownDatePickerHookType } from '../../utils';
import { DropdownDatePickerStyleKeys, DropdownDatePickerStyleParams } from './styles/types';
import { DatePickerInnerComponentsProps } from '../../types';

export const DROPDOWN_TYPES = valuesAsKeysFromArray([
    'MONTHS',
    'YEARS',
] as const);

export type DropdownDatePickerTypes = keyof typeof DROPDOWN_TYPES;

export interface DatePickerDropdownProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<DropdownDatePickerStyleKeys, DropdownDatePickerStyleParams>,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles'>,
    DropdownDatePickerStyleParams {
    type: DropdownDatePickerTypes;
    refDropdown: RefObject<HTMLDivElement>;
    dropdownData: DropdownDatePickerHookType;
    viewingDate: Date;
    setViewingDate: Dispatch<SetStateAction<Date>>;
}
