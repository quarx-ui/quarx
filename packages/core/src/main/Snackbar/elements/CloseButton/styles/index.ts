import { KeysFromUseStyles, makeStyles } from '@core';

export const useStyles = makeStyles(() => ({
    root: {
        height: 40,
        width: 40,
        minWidth: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}), { name: 'QxSnackbar-CloseButton' });

export type SnackbarCloseButtonStyleKeys = KeysFromUseStyles<typeof useStyles>;
