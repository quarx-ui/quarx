import { Dispatch, RefObject, SetStateAction } from 'react';
import { WithClassesAndStyles, DatePickerInnerComponentsProps, DatePickerStyleParams } from '@core';
import { HeaderDatePickerStyleKeys } from '.';
import { DropdownDatePickerHookType } from '../../utils';

export type HeaderStyleParams = Pick<DatePickerStyleParams, 'size' | 'borderRadius'>

export interface HeaderDatePickerProps extends WithClassesAndStyles<HeaderDatePickerStyleKeys, HeaderStyleParams>,
    HeaderStyleParams, Pick<DatePickerInnerComponentsProps, 'innerStyles'> {
    years?: number[],
    setViewingDate: Dispatch<SetStateAction<Date>>,
    isLarge?: boolean,
    viewingDate: Date,
    dropdownData: {
        monthDropdownData: DropdownDatePickerHookType,
        yearDropdownData: DropdownDatePickerHookType
    },
    refDropdown?: RefObject<HTMLDivElement>,
    disableYearChange?: boolean
}
