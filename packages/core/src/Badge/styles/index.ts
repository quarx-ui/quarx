import { paramsToCss } from '@core/utils/paramsToCss';
import { CSSObject } from '@emotion/react';
import { KeysFromUseStyles, makeStyles, typography } from '@core';
import { BadgeStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { type, size, color, borderRadius }: BadgeStyleParams,
) => {
    const flexCenter: CSSObject = {
        display: 'flex',
        alignItems: 'center',
    };

    return ({
        root: {
            ...flexCenter,
            maxWidth: 'max-content',
            minWidth: 'fit-content',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            borderWidth: 1,
            borderStyle: 'solid',

            ...paramsToCss(size)({
                small: {
                    height: 24,
                    ...typography.Text.S.Medium,
                    padding: '3px 7px',
                },
                large: {
                    height: 32,
                    ...typography.Text.L.Medium,
                    padding: '3px 9px',
                },
            }),

            ...paramsToCss(size, borderRadius)({
                small: {
                    square: {
                        borderRadius: 4,
                    },
                    smooth: {
                        borderRadius: 8,
                    },
                    rounded: {
                        borderRadius: 24,
                    },
                },
                large: {
                    square: {
                        borderRadius: 4,
                    },
                    smooth: {
                        borderRadius: 12,
                    },
                    rounded: {
                        borderRadius: 24,
                    },
                },
            }),

            ...paramsToCss(type)({
                filled: {
                    color: palette.colors[color].contrastText,
                    backgroundColor: palette.colors[color].default,
                },
                outline: {
                    backgroundColor: 'transparent',
                    borderColor: palette.colors[color].default,
                    color: palette.colors[color].default,
                },
            }),
        },

        /* Side elements */
        leftItem: {
            marginRight: 4,

            ...flexCenter,
            ...paramsToCss(size)({
                small: {
                    marginLeft: '-2px',
                },
                large: {
                    marginLeft: '-4px',
                },
            }),
        },
        rightItem: {
            marginLeft: 4,

            ...flexCenter,
            ...paramsToCss(size)({
                small: {
                    marginRight: '-2px',
                },
                large: {
                    marginRight: '-4px',
                },
            }),
        },
        counter: {
            marginLeft: 6,
            ...paramsToCss(size)({
                small: {
                    marginRight: '-4px',
                },
                large: {
                    marginRight: '-6px',
                },
            }),
        },
    });
}, { name: 'SxBadge' });

export type BadgeStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
