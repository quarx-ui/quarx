import { KeysFromUseStyles, makeStyles, DatePickerStyleParams } from '@core';
import { MONTH_TYPOGRAPHY } from './utils';

export const useStyles = makeStyles((
    { palette, elevations, borderRadii },
    { borderRadius, size, isLarge }: Required<DatePickerStyleParams>,
) => ({
    root: {
        ...elevations.main.medium,
        background: palette.background.main,
        width: 'min-content',
        borderRadius: borderRadius === 'max' ? borderRadii.xLarge : borderRadii[borderRadius],
        boxSizing: 'border-box',
        ...MONTH_TYPOGRAPHY[size],
    },

    content: {
        display: 'flex',
    },

    leftContent: {
        display: 'flex',
        flexDirection: 'column',
    },

    calendar: {
        display: 'flex',
        flexDirection: 'row',
    },
}), { name: 'QxDatePicker' });

export type DatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
