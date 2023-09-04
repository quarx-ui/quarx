import { Dispatch, RefObject, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import { SelectedDates, PickerSelectedDate } from '@core/src/experimental';
import { HeaderDatePickerStyleKeys } from './styles';
import { DropdownDatePickerHookType } from '../../utils';
import { DatePickerInnerComponentsProps } from '../../types';
import { HeaderStyleParams } from './styles/types';

export interface HeaderDatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<HeaderDatePickerStyleKeys, HeaderStyleParams>,
    HeaderStyleParams, Pick<DatePickerInnerComponentsProps<D>, 'innerStyles' | 'disableYearChanging'> {
    years?: number[];
    setViewingDate: Dispatch<SetStateAction<Date>>;
    isLarge?: boolean;
    viewingDate: Date;
    dropdownData: {
        monthDropdownData: DropdownDatePickerHookType;
        yearDropdownData: DropdownDatePickerHookType;
    };
    refDropdown?: RefObject<HTMLDivElement>;
}
