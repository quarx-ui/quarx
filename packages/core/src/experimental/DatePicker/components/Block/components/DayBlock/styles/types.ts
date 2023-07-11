import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams, DatePickerTimeTypes } from '@core/src/experimental';
import { useStyles } from './index';

export type DayStyleKeys = KeysFromUseStyles<typeof useStyles>

export interface DayStylesParams extends Omit<DatePickerStyleParams, 'countWeeksInMonth' | 'width'> {
    bigPressScope: boolean;
    isLarge: boolean;
    isMobile?: boolean;
    numDay: number;
    type: DatePickerTimeTypes;
    isDayInPeriod: boolean;
    isDayTrusted: boolean;
    isHoveredPeriod: boolean;
    isDayInHoveredPeriod: boolean;
    isEqualDays: boolean;
    isDayLastInPeriod: boolean;
    isDayFirstInPeriod: boolean;
    isPeriodSelected: boolean;
    isDayInViewableMonth: boolean;
    isDaySelected: boolean;
    isDayHovered: boolean;
    isSecondPickInPeriod: boolean;
    isDayInPeriodLarge: boolean;
}
