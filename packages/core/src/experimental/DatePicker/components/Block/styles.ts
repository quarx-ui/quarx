import { KeysFromUseStyles, makeStyles } from '@core';
import { getMonthTypography } from './utils';
import { DatePickerStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, elevations, borderRadii, typography },
    { borderRadius, size }: Required<DatePickerStyleParams>,
) => ({
    root: {
        ...elevations.main.medium,
        background: palette.background.main,
        width: 'min-content',
        borderRadius: borderRadius === 'max' ? borderRadii.xLarge : borderRadii[borderRadius],
        boxSizing: 'border-box',
        ...getMonthTypography(typography)[size],
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
}));

export type DatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
