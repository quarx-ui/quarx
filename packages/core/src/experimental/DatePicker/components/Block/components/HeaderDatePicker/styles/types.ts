import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams } from '@core/src/experimental';
import { useStyles } from './index';

export type HeaderDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>

export type HeaderStyleParams = Pick<DatePickerStyleParams, 'size' | 'borderRadius'>
