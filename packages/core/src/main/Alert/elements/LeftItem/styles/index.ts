import { KeysFromUseStyles, makeStyles } from '@core';
import { LeftItemStyleParams } from '@core/src/main/Alert/elements/LeftItem/styles/types';

export const useStyles = makeStyles((
    { palette },
    { color }: LeftItemStyleParams,
) => ({
    root: [
        {
            display: 'flex',
        },

        color !== 'default' && {
            color: palette.colors[color].default,
        },

        color === 'default' && {
            color: palette.text.secondary,
        },
    ],
}));

export type LeftItemStyleKeys = KeysFromUseStyles<typeof useStyles>;
