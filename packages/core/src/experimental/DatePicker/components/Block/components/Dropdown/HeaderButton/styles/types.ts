import { KeysFromUseStyles } from '@core';
import { DatePickerStyleParams } from '@core/src/experimental';
import { useStyles } from './index';

export type DropdownButtonStyleKeys = KeysFromUseStyles<typeof useStyles>

export interface DropdownButtonStyleParams extends Pick<DatePickerStyleParams, 'borderRadius' | 'size'>{
    isOpen: boolean;
    disable?: boolean;
}
