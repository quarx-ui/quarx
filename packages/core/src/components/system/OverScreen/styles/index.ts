import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { paramsToCss } from '@core';
import { OverScreenStyleParams } from './types';

export const useStyles = makeStyles((
    _,
    { placement, margin, mounted }: OverScreenStyleParams,
) => ({
    root: [
        {
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            padding: margin,
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            zIndex: mounted
                ? 999
                : -1,
        },

        paramsToCss(placement)({
            center: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            top: {
                justifyContent: 'center',
                alignItems: 'start',
            },
            bottom: {
                justifyContent: 'center',
                alignItems: 'end',
            },
            'top-start': {
                alignItems: 'start',
                justifyContent: 'start',
            },
            'top-end': {
                alignItems: 'start',
                justifyContent: 'end',
            },
            'bottom-start': {
                alignItems: 'end',
                justifyContent: 'start',
            },
            'bottom-end': {
                alignItems: 'end',
                justifyContent: 'end',
            },
            left: {
                justifyContent: 'start',
                alignItems: 'center',
            },
            right: {
                justifyContent: 'end',
                alignItems: 'center',
            },
        }),
    ],
}));

export type OverScreenStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
