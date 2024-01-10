import { KeysFromUseStyles, makeStyles, ALERT_TYPE } from '@core';
import { ActionButtonsStyleParams } from './types';

export const useStyles = makeStyles((
    _,
    { type }: ActionButtonsStyleParams,
) => ({
    root: [
        type === 'horizontal' && {
            marginLeft: 10,
        },
    ],
    button: [
        type === ALERT_TYPE.horizontal && {
            paddingTop: 7,
            paddingBottom: 7,
        },
    ],
}));

export type ActionButtonStyleKeys = KeysFromUseStyles<typeof useStyles>;
