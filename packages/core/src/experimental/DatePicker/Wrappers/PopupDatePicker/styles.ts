import { KeysFromUseStyles, makeStyles } from '@core';
import { PopupDatePickerStyleParams } from './types';

export const useStyles = makeStyles(({ palette }, {
    zIndex,
}: PopupDatePickerStyleParams) => ({
    root: {
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: 0,
        borderRadius: 8,
        border: '1px solid',
        borderColor: palette.border.main,

        zIndex,
    },
}));

export type PopupDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>;
