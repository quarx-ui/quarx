import {
    DatePickerInnerComponentsProps,
    DatePickerSize, InnerTimeSetters, PickerSelectedDate,
    SelectedDates, WithClassesAndStyles,
} from '@core';
import { TimeBadgeStyleKeys } from './styles';

export interface TimeBadgeProps<D extends SelectedDates = PickerSelectedDate> extends
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles' | 'onChange' | 'selected' | 'allowedDates'
    | 'periodChangingFlow' | 'editablePartOfPeriod' | 'onChangeEditablePartOfPeriod'>,
    Required<Pick<DatePickerInnerComponentsProps<D>, 'borderRadius'>>,
    TimeBadgeStyleParams,
    WithClassesAndStyles<TimeBadgeStyleKeys, TimeBadgeStyleParams>
{
    setTimes: InnerTimeSetters;
    time: string;
}

export interface TimeBadgeStyleParams {
    size: DatePickerSize;
    active: boolean;
}
