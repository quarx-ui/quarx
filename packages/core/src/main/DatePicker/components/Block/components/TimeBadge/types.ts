import {
    DatePickerInnerComponentsProps,
    DatePickerSize, InnerTimeSetters, PickerSelectedDate,
    SelectedDates,
} from '@core';
import { LastEditedDateType } from '../../utils';

export interface TimeBadgeProps<D extends SelectedDates = PickerSelectedDate> extends
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles' | 'onChange' | 'selected' | 'allowedDates'>,
    Required<Pick<DatePickerInnerComponentsProps<D>, 'borderRadius'>>,
    TimeBadgeStyleProps
{
    setTimes: InnerTimeSetters;
    lastEditedDateTypeInPeriod?: LastEditedDateType;
    time: string;
}

export interface TimeBadgeStyleProps {
    size: DatePickerSize;
    active: boolean;
}
