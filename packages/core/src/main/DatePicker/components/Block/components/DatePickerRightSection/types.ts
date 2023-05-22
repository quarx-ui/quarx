import {
    CommonDatePickerProps,
    DatePickerSize,
    InnerTimeValues, PickerSelectedDate,
    SelectedDates,
} from '@core';
import { TimeBadgeProps } from '../TimeBadge/types';

export interface DatePickerRightSectionProps<D extends SelectedDates = PickerSelectedDate> extends
    Required<Pick<CommonDatePickerProps, 'timesToTimeBadges'>>,
    Omit<TimeBadgeProps<D>, 'time' | 'active'>,
    DatePickerRightSectionStyleProps
{
    timeText: string;
    times: InnerTimeValues;
}

export interface DatePickerRightSectionStyleProps {
    size: DatePickerSize;
    countWeeksInMonth: number;
}
