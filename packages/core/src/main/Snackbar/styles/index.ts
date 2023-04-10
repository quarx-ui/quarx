import { KeysFromUseStyles, makeStyles } from '@core/styles';
import { paramsToCss } from '@core';
import { SnackbarStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, elevations, borders, borderRadii },
    { color, alert, size, elevation, background }: SnackbarStyleParams,
) => ({
    root: [
        {
            boxSizing: 'border-box',
            display: 'flex',
            borderRadius: borderRadii.large,
            color: palette.text.main,
            ...elevations[background][elevation],
            ...borders.small,
        },

        alert
            ? paramsToCss(size)({
                small: {
                    padding: '10px 14px 10px 12px',
                    width: 720,
                },
                large: {
                    padding: '12px 16px',
                    width: 800,
                },
            })
            : paramsToCss(size)({
                small: {
                    padding: 12,
                    width: 400,
                },
                large: {
                    padding: 16,
                    width: 540,
                },
            }),

        color !== 'default' && {
            background: palette.colors[color].bg,
        },

        alert && {
            paddingTop: 12,
            paddingBottom: 12,
        },
    ],

    content: [
        alert && { justifyContent: 'center' },
    ],
    leftItem: [
        alert && { alignItems: 'center' },
    ],

    closeButton: [
        {
            marginLeft: 8,
        },
        alert && {
            alignSelf: 'center',
            color: palette.border.secondary,
        },
    ],
}));

export type SnackbarStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './constants';
