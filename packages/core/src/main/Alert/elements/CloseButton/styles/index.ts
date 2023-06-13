import { KeysFromUseStyles, makeStyles } from '@core';
import { ALERT_TYPE } from '@core/src/main/Alert';
import { CloseButtonStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { type }: CloseButtonStyleParams,
) => ({
    root: {
        height: 40,
        width: 40,
        minWidth: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
    },
    button: [
        type === ALERT_TYPE.horizontal && {
            color: palette.colors.secondary.border,
        },
    ],
}));

export type CloseButtonStyleKeys = KeysFromUseStyles<typeof useStyles>;
