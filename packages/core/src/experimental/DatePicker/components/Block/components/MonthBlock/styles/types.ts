import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams } from '@core/src/experimental';
import { useStyles } from './index';

export type MonthBlockStyleKeys = KeysFromUseStyles<typeof useStyles>
export type MonthBlockStyleParams = Pick<DatePickerStyleParams, 'size'>
