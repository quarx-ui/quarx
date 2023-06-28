import { KeysFromUseStyles, makeStyles } from '@core';
import { OFFSET_ROOT } from '../../utils';
import { HeaderStyleParams } from './types';

export const useStyles = makeStyles(({ palette }, { size }: Required<HeaderStyleParams>) => ({
    root: {
        padding: OFFSET_ROOT[size],
        display: 'flex',
        flexDirection: 'row',
        borderBottom: `1px solid ${palette.border.main}`,
    },
    rotateLeftIcon: {
        transform: 'rotate(180deg)',
    },

    headerMonthContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        color: palette.text.main,
    },
    headerMonth: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export type HeaderDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
