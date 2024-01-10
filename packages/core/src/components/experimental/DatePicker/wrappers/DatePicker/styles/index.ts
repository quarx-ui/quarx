import { KeysFromUseStyles, makeStyles } from '../../../../../../../index';
import { DatePickerStyleParams } from './types';

export const useStyles = makeStyles(({ palette }, {
    zIndex,
}: DatePickerStyleParams) => ({
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

export type DatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>;
