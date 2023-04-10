import { KeysFromUseStyles, makeStyles } from '@core';
import { SnackbarLeftItemStyleParams } from '@core/src/main/Snackbar/elements/LeftItem/styles/types';

export const useStyles = makeStyles((
    { palette },
    { color }: SnackbarLeftItemStyleParams,
) => ({
    root: [
        { display: 'flex' },

        color !== 'default' && {
            color: palette.colors[color].default,
        },

        color === 'default' && {
            color: palette.text.secondary,
        },
    ],
}), { name: 'QxSnackbar-LeftItem' });

export type SnackbarLeftItemStyleKeys = KeysFromUseStyles<typeof useStyles>;

export * from './types';
