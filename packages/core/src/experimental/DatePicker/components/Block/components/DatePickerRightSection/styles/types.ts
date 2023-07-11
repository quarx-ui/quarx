import { KeysFromUseStyles } from '@core';
import { DatePickerSize } from '@core/src/experimental';
import { useStyles } from '.';

export type DatePickerRightSectionStyleKeys = KeysFromUseStyles<typeof useStyles>
export interface DatePickerRightSectionStyleParams {
    size: DatePickerSize;
    countWeeksInMonth: number;
}
