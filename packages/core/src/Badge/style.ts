import { paramsToCss } from '@core/utils/paramsToCss';
import { CSSObject } from '@emotion/react';
import { typography } from '@core/styles';
import { BadgeStyleParams } from './types';
import { KeysFromUseStyles, makeStyles } from '../../emotion-styles';

export const useStyles = makeStyles((
    { palette },
    { type, size, color, borderRadius }: Required<BadgeStyleParams>,
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
                    color: palette.Text.mainInverse,
                    borderColor: 'transparent',
                },
                outline: {
                    backgroundColor: 'transparent',
                },
            }),

            ...paramsToCss(type, color)({
                filled: {
                    color1: {
                        backgroundColor: palette.LabelTag.color1.main,
                    },
                    color2: {
                        backgroundColor: palette.LabelTag.color2.main,
                    },
                    warning: {
                        backgroundColor: palette.LabelTag.warning.main,
                    },
                    critical: {
                        backgroundColor: palette.LabelTag.critical.main,
                    },
                },
                outline: {
                    color1: {
                        borderColor: palette.LabelTag.color1.secondary,
                        color: palette.LabelTag.color1.main,
                    },
                    color2: {
                        borderColor: palette.LabelTag.color2.secondary,
                        color: palette.LabelTag.color2.main,
                    },
                    warning: {
                        borderColor: palette.LabelTag.warning.secondary,
                        color: palette.LabelTag.warning.main,
                    },
                    critical: {
                        borderColor: palette.LabelTag.critical.secondary,
                        color: palette.LabelTag.critical.main,
                    },
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
