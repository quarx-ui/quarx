import { DatePickerStyleParams } from '@core/src/experimental';

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
