import { PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { WithClassesAndStyles } from '@core';
import { TimeBadgeStyleParams } from './styles/types';
import { DatePickerInnerComponentsProps, InnerTimeSetters } from '../../types';
import { TimeBadgeStyleKeys } from './styles/index';

export interface TimeBadgeProps<D extends SelectedDates = PickerSelectedDate> extends
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles' | 'onChange' | 'selected'
    | 'periodChangingFlow' | 'editablePartOfPeriod' | 'onChangeEditablePartOfPeriod'>,
    Required<Pick<DatePickerInnerComponentsProps<D>, 'borderRadius'>>,
    TimeBadgeStyleParams,
    WithClassesAndStyles<TimeBadgeStyleKeys, TimeBadgeStyleParams>
{
    setTimes: InnerTimeSetters;
    time: string;
}
