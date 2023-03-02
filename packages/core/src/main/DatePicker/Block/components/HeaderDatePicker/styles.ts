import { KeysFromUseStyles, makeStyles, HeaderStyleParams } from '@core';
import { OFFSET_ROOT } from '../../utils';

export const useStyles = makeStyles(({ palette }, { size }: Required<HeaderStyleParams>) => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: OFFSET_ROOT[size],
        borderBottom: `1px solid ${palette.border.main}`,
    },

    headerLarge: {
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
}), { name: 'HeaderDatePicker' });

export type HeaderDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
