import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams } from '@core/src/experimental';
import { useStyles } from './index';

export type FooterDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
export type FooterStyleParams = Pick<DatePickerStyleParams, 'size'>
