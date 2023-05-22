import { KeysFromUseStyles, makeStyles } from '@core';
import { DATE_PICKER_DAY_SIZE_PX, OFFSET_DAYS, OFFSET_MONTH_BLOCK, OFFSET_ROOT, WIDTH_BY_SIZE } from '../../utils';
import { FooterStyleParams } from '.';

export const useStyles = makeStyles(({ palette }, { size }: Required<FooterStyleParams>) => ({
    footer: {
        padding: OFFSET_ROOT[size],
        borderTop: `1px solid ${palette.border.main}`,
        display: 'flex',
        flexDirection: 'column',
        width: WIDTH_BY_SIZE(size),
    },
    periodTimeTextField: {
        width: '50%',
        minWidth: 'auto',
    },
    selectedTime: {
        width: '100%',
    },
    timeTextFieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    },
    labelTimeTextField: {
        color: palette.text.secondary,
    },
}));

export type FooterDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
