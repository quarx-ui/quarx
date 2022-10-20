import { KeysFromUseStyles, makeStyles } from '@core';
import { BackdropStyleParams } from './types';

export const useStyles = makeStyles((
    _,
    { invisible }: BackdropStyleParams,
) => ({
    root: [
        {
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        invisible && {
            backgroundColor: 'transparent',
        },
    ],
}), { name: 'SxBackdrop' });

export type BackdropStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { BackdropStyleParams };
