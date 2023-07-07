import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DatePickerRightSectionStyleKeys, DatePickerRightSectionStyleParams } from './styles/types';
import { TimeBadgeProps } from '../TimeBadge/types';
import { CommonDatePickerProps, InnerTimeValues } from '../../types';

type CommonDatePickerPropsToRightSections<D extends SelectedDates> = Omit<TimeBadgeProps<D>,
'time' | 'active' | 'styles' | 'classes'>;

export interface DatePickerRightSectionProps<D extends SelectedDates = PickerSelectedDate> extends
    Required<Pick<CommonDatePickerProps, 'timesToTimeBadges' | 'editablePartOfPeriod' | 'periodChangingFlow' |
    'onChangeEditablePartOfPeriod'>>,
    CommonDatePickerPropsToRightSections<D>,
    DatePickerRightSectionStyleParams,
    WithClassesAndStyles<DatePickerRightSectionStyleKeys, DatePickerRightSectionStyleParams>
{
    timeText: string;
    times: InnerTimeValues;
}
