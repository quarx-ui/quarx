import {
    WithClassesAndStyles,
} from '@core';
import { DatePickerSize, PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DatePickerRightSectionStyleKeys } from './styles';
import { TimeBadgeProps } from '../TimeBadge/types';
import { CommonDatePickerProps, InnerTimeValues } from '../../types';

export interface DatePickerRightSectionProps<D extends SelectedDates = PickerSelectedDate> extends
    Required<Pick<CommonDatePickerProps, 'timesToTimeBadges' | 'editablePartOfPeriod' | 'periodChangingFlow' |
    'onChangeEditablePartOfPeriod'>>,
    Omit<TimeBadgeProps<D>, 'time' | 'active' | 'styles' | 'classes'>,
    DatePickerRightSectionStyleParams,
    WithClassesAndStyles<DatePickerRightSectionStyleKeys, DatePickerRightSectionStyleParams>
{
    timeText: string;
    times: InnerTimeValues;
}

export interface DatePickerRightSectionStyleParams {
    size: DatePickerSize;
    countWeeksInMonth: number;
}
