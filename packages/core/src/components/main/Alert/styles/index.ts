import { KeysFromUseStyles, makeStyles } from '@core/styles';
import { ALERT_TYPE, paramsToCss } from '@core';
import { AlertStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii, borders, elevations },
    { size, color, elevation, background, type, isMinimalView }: AlertStyleParams,
) => {
    const isAlert = type === ALERT_TYPE.horizontal;
    const center = isAlert || isMinimalView;

    return ({
        root: [
            {
                boxSizing: 'border-box',
                display: 'flex',
                borderRadius: borderRadii.large,
                color: palette.text.main,
                ...elevations[background][elevation],
                ...borders.small,
            },

            paramsToCss(type, size)({
                vertical: {
                    small: {
                        padding: 12,
                        width: 400,
                    },
                    large: {
                        padding: 16,
                        width: 540,
                    },
                },
                horizontal: {
                    small: {
                        padding: '10px 14px 10px 12px',
                        width: 720,
                    },
                    large: {
                        padding: '12px 16px',
                        width: 800,
                    },
                },
            }),

            color !== 'default' && {
                background: palette.colors[color].bg,
            },

            center && {
                paddingTop: 12,
                paddingBottom: 12,
            },
        ],

        content: [
            center && { justifyContent: 'center' },
        ],
        leftItem: [
            center && { alignItems: 'center' },
            {
                marginRight: 12,
            },
        ],

        closeButton: [
            { marginLeft: 8 },
            center && { alignSelf: 'center' },
            isAlert && { color: palette.border.secondary },
        ],
    });
});

export type AlertStyleKeys = KeysFromUseStyles<typeof useStyles>;
