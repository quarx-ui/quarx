import { typography } from '@core/styles';
import { KeysFromUseStyles, makeStyles, ButtonStyleParams } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';

export const useStyles = makeStyles((
    { palette, transitions, borders },
    { type, size, color, borderRadius, loading, disabled }: Required<ButtonStyleParams>,
) => ({
    root: [
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            borderColor: 'transparent',
            ...borders.setColor('transparent').small,
            position: 'relative',
            cursor: 'pointer',
            backgroundColor: 'transparent',

            transition: transitions.create(['background-color', 'border-color', 'box-shadow'], {
                duration: transitions.duration.shorter,
            }),
        },
        paramsToCss(size)({
            xSmall: {
                height: 32,
                padding: '0 12px',
                ...typography.Text.M.Medium,
            },
            small: {
                height: 40,
                padding: '0 16px',
                ...typography.Text.M.Medium,
            },
            medium: {
                height: 52,
                padding: '0 20px',
                ...typography.Text.L.Medium,
            },
            large: {
                height: 60,
                padding: '0 24px',
                ...typography.Text.XL.Medium,
            },
        }),
        /* Color */
        paramsToCss(type)({
            text: {
                background: 'transparent',
                color: palette.colors[color].default,

                '&:hover, &:focus-visible': {
                    background: palette.colors[color].alpha.min,
                },

                '&:active': {
                    background: palette.colors[color].alpha[16],
                },
            },
            outlined: {
                background: 'transparent',
                borderColor: palette.colors[color].border,
                color: palette.colors[color].default,

                '&:hover, &:focus-visible': {
                    background: palette.colors[color].alpha[8],
                },
                '&:active': {
                    background: palette.colors[color].alpha[16],
                },
            },
            contained: {
                backgroundColor: palette.colors[color].default,
                color: palette.colors[color].contrastText,

                '&:hover, &:focus-visible': {
                    backgroundColor: palette.colors[color].hover,
                    borderColor: palette.colors[color].hover,
                },
                '&:active': {
                    backgroundColor: palette.colors[color].press,
                    borderColor: palette.colors[color].press,
                },
            },
        }),
        color === 'secondary' && type === 'contained' && {
            '&:focus-visible': {
                boxShadow: `0px 0px 0px 1px ${palette.border.secondary} inset`,
                borderColor: palette.border.secondary,
                outline: 'none',
                '&:hover, &:active': { borderColor: palette.border.secondary },
            },
        },
        paramsToCss(borderRadius)({
            square: {
                borderRadius: 4,
            },
            smooth: {
                borderRadius: 12,
                ...paramsToCss(size)({
                    xSmall: {
                        borderRadius: 8,
                    },
                    small: {
                        borderRadius: 10,
                    },
                    medium: {},
                    large: {},
                }),
            },
            rounded: paramsToCss(size)({
                xSmall: {
                    borderRadius: 16,
                },
                small: {
                    borderRadius: 20,
                },
                medium: {
                    borderRadius: 26,
                },
                large: {
                    borderRadius: 30,
                },
            }),
        }),

        loading && {
            '&&': {
                cursor: 'unset',

                ...paramsToCss(type)({
                    contained: {
                        '&:hover, &:active, &:focus-visible': {
                            backgroundColor: palette.colors[color].default,
                            borderColor: 'transparent',
                            color: palette.colors[color].contrastText,
                        },
                    },
                    outlined: {
                        color: palette.text.main,
                        '&:hover, &:active, &:focus-visible': {
                            background: 'transparent',
                            borderColor: palette.colors[color].border,
                        },
                    },

                    text: {
                        color: palette.text.main,
                        '&:hover, &:active': {
                            background: 'transparent',
                        },
                    },
                }),
            },
        },
        disabled && {
            '&&': {
                cursor: 'not-allowed',
                borderColor: 'transparent',

                ...paramsToCss(type)({
                    contained: {
                        backgroundColor: palette.disabled.bg,
                        color: palette.disabled.contrast,
                    },
                    outlined: {
                        backgroundColor: 'transparent',
                        borderColor: palette.disabled.border,
                        color: palette.disabled.contrast,
                    },
                    text: {
                        borderColor: 'transparent',
                        backgroundColor: 'transparent',
                        color: palette.disabled.contrast,
                    },
                }),
            },
        },
        {
            '&:focus-visible': {
                boxShadow: `0px 0px 0px 1px ${palette.border.focus.dark} inset`,
                borderColor: palette.border.focus.dark,
                outline: 'none',
            },

            '&:disabled:focus-visible': {
                boxShadow: 'none',
                outline: 'none',
            },
        },
    ],
}), { name: 'SxBaseButton' });

export type BaseButtonStyleKeys = KeysFromUseStyles<typeof useStyles>
