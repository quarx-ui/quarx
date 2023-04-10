import { KeysFromUseStyles, makeStyles, paramsToCss } from '@core';
import { ActionButtonsStyleParams } from './types';

export const useStyles = makeStyles((
    _,
    { size, alert }: ActionButtonsStyleParams,
) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    button: [
        {
            '&:not(:last-child)': paramsToCss(size)({
                small: { marginRight: 8 },
                large: { marginRight: 12 },
            }),
        },
        alert && {
            paddingTop: 7,
            paddingBottom: 7,
        },
    ],
}));

export type SnackbarActionButtonStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
