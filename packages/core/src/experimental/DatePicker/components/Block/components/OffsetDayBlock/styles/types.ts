import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams } from '@core/src/experimental';
import { useStyles } from './index';

export type OffsetDayStyleKeys = KeysFromUseStyles<typeof useStyles>

export type DatePickerSizeInterface = Pick<DatePickerStyleParams, 'size'>

export interface OffsetDayStyleParams extends DatePickerSizeInterface {
    isDayInPeriod: boolean;
    isDayLastInPeriod: boolean;
    isEqualDays: boolean;
    isHoveredPeriod: boolean;
    isWeekdayName?: boolean;
    isDayInPeriodLarge: boolean;
    isLarge?: boolean;
    bigPressScope?: boolean;
}
