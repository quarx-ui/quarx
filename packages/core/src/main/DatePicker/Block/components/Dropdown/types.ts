import {
    DatePickerStyleParams, valuesAsKeysFromArray, WithClassesAndStyles, DatePickerInnerComponentsProps,
} from '@core';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { DropdownDatePickerHookType } from '../../utils';
import { DropdownDatePickerStyleKeys } from './styles';

export const DROPDOWN_TYPES = valuesAsKeysFromArray([
    'MONTHS',
    'YEARS',
] as const);

export type DropdownDatePickerTypes = keyof typeof DROPDOWN_TYPES;

export interface DropdownStyleParams extends Pick<DatePickerStyleParams, 'size' | 'borderRadius'> {
    countWeeksInMonth: number
}

export interface DatePickerDropdownProps extends WithClassesAndStyles<DropdownDatePickerStyleKeys, DropdownStyleParams>,
    Pick<DatePickerInnerComponentsProps, 'innerStyles'>, DropdownStyleParams {
    type: DropdownDatePickerTypes,
    refDropdown: RefObject<HTMLDivElement>
    dropdownData: DropdownDatePickerHookType,
    viewingDate: Date,
    setViewingDate: Dispatch<SetStateAction<Date>>,
}
