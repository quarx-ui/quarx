import {
    DatePickerInnerComponentsProps,
    DatePickerSize, InnerTimeSetters, PickerSelectedDate,
    SelectedDates,
} from '@core';
import { LastEditedDateType } from '../../utils';

export interface TimeBadgeProps<D extends SelectedDates = PickerSelectedDate> extends
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles' | 'onChange' | 'selected' | 'allowedDates'
    | 'periodChangingFlow' | 'editablePartOfPeriod' | 'onChangeEditablePartOfPeriod'>,
    Required<Pick<DatePickerInnerComponentsProps<D>, 'borderRadius'>>,
    TimeBadgeStyleProps
{
    setTimes: InnerTimeSetters;
    time: string;
}

export interface TimeBadgeStyleProps {
    size: DatePickerSize;
    active: boolean;
}
