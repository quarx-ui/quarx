import { KeysFromUseStyles, makeStyles } from '@core';
import { OFFSET_ROOT } from '../../utils';
import { FooterStyleParams } from '.';

export const useStyles = makeStyles(({ palette }, { size }: Required<FooterStyleParams>) => ({
    footer: {
        padding: OFFSET_ROOT[size],
        borderTop: `1px solid ${palette.border.main}`,
        display: 'flex',
        flexDirection: 'column',
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
