import {
    CommonDatePickerProps,
    DatePickerSize,
    InnerTimeValues, PickerSelectedDate,
    SelectedDates, WithClassesAndStyles,
} from '@core';
import {
    DatePickerRightSectionStyleKeys,
} from '@core/src/main/DatePicker/components/Block/components/DatePickerRightSection/styles';
import { TimeBadgeProps } from '../TimeBadge/types';

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
