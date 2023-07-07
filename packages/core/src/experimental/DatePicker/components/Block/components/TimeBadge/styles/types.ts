import { KeysFromUseStyles } from '@core';
import { DatePickerSize } from '@core/src/experimental';
import { useStyles } from './index';

export type TimeBadgeStyleKeys = KeysFromUseStyles<typeof useStyles>

export interface TimeBadgeStyleParams {
    size: DatePickerSize;
    active: boolean;
}
