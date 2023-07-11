import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams } from '@core/src/experimental';
import { useStyles } from './index';

export type DropdownDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>

export interface DropdownDatePickerStyleParams extends Pick<DatePickerStyleParams, 'size' | 'borderRadius'> {
    countWeeksInMonth: number;
}
