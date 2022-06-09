import { typography } from '@core/styles';
import { KeysFromUseStyles, makeStyles } from '@core/emotion-styles';
import { BaseButtonStyleParams } from '@core/src/Button/BaseButton/types';
import { paramsToCss } from '@core/utils/paramsToCss';

export const useStyles = makeStyles((
    { palette, transitions },
    { type, size, color, borderRadius, loading, disabled }: Required<BaseButtonStyleParams>,
) => {
    const isLight = palette.type === 'light';
    return ({
        root: [
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                border: `2px solid ${palette.Button.contained.primary.enabled}`,
                boxShadow: 'none',
                position: 'relative',
                cursor: 'pointer',
                backgroundColor: 'transparent',

                transition: transitions.create(['background-color', 'border-color', 'box-shadow'], {
                    duration: transitions.duration.shorter,
                }),

                '&:focus-visible': {
                    boxShadow: `0px 0px 0px 1px ${palette.ContainerState.focus2} inset`,
                    borderColor: palette.ContainerState.focus2,
                    outline: 'none',
                },

                '&:disabled:focus-visible': {
                    boxShadow: 'none',
                    outline: 'none',
                },
            },
            paramsToCss(size)({
                xSmall: {
                    padding: 4,
                    ...typography.Text.M.Semibold,
                },
                small: {
                    padding: 6,
                    ...typography.Text.M.Semibold,
                },
                medium: {
                    padding: '12px 10px',
                    ...typography.Text.L.Semibold,
                },
                large: {
                    padding: '14px 10px',
                    ...typography.Text.XL.Semibold,
                },
            }),
            paramsToCss(type, color)({
                contained: {
                    primary: {
                        backgroundColor: palette.Button.contained.primary.enabled,
                        color: isLight ? palette.Text.mainInverse : palette.Text.main,
                        borderColor: palette.Button.contained.primary.enabled,

                        '&:hover': {
                            backgroundColor: palette.Button.contained.primary.hover,
                            borderColor: palette.Button.contained.primary.hover,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.contained.primary.press,
                            borderColor: palette.Button.contained.primary.press,
                        },
                    },
                    secondary: {
                        backgroundColor: palette.Button.contained.secondary.enabled,
                        borderColor: palette.Button.contained.secondary.enabled,
                        color: palette.Text.mainInverse,

                        '&:hover': {
                            backgroundColor: palette.Button.contained.secondary.hover,
                            borderColor: palette.Button.contained.secondary.hover,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.contained.secondary.press,
                            borderColor: palette.Button.contained.secondary.press,
                        },
                        '&:focus-visible': {
                            boxShadow: `0px 0px 0px 1px ${palette.ContainerState.focus3}`,
                            borderColor: palette.ContainerState.focus3,
                            outline: 'none',
                            '&:hover, &:active': { borderColor: palette.ContainerState.focus3 },
                        },
                    },
                    critical: {
                        backgroundColor: palette.Button.contained.critical.enabled,
                        borderColor: palette.Button.contained.critical.enabled,
                        color: isLight ? palette.Text.mainInverse : palette.Text.main,

                        '&:hover': {
                            backgroundColor: palette.Button.contained.critical.hover,
                            borderColor: palette.Button.contained.critical.hover,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.contained.critical.press,
                            borderColor: palette.Button.contained.critical.press,
                        },
                    },
                },
                outlined: {
                    primary: {
                        borderColor: palette.Button.outline.primary.enabled,
                        color: palette.Text.brand,

                        '&:hover': {
                            backgroundColor: palette.Button.outline.primary.hover,
                            borderColor: palette.Button.outline.primary.hover,
                            color: isLight ? palette.Text.mainInverse : palette.Text.main,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.outline.primary.bgPress,
                            borderColor: palette.Button.outline.primary.bgPress,
                        },
                    },
                    secondary: {
                        borderColor: palette.Button.outline.secondary.strokeEnabled,
                        color: palette.Text.main,

                        '&:hover': {
                            backgroundColor: palette.Button.outline.secondary.bgHover,
                            borderColor: 'transparent',
                            color: palette.Text.main,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.outline.secondary.bgPress,
                            borderColor: 'transparent',
                            color: palette.Text.main,
                        },
                    },
                    critical: {
                        color: palette.Text.critical,
                        borderColor: palette.Button.outline.critical.strokeEnabled,

                        '&:hover': {
                            backgroundColor: palette.Button.outline.critical.bgHover,
                            borderColor: 'transparent',
                            color: isLight ? palette.Text.mainInverse : palette.Text.main,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.outline.critical.bgPress,
                            borderColor: 'transparent',
                        },
                    },
                },
                text: {
                    primary: {
                        color: palette.Text.brand,
                        borderColor: 'transparent',

                        '&:hover': {
                            backgroundColor: palette.Button.text.primary.bgHover,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.text.primary.bgPress,
                        },
                    },
                    secondary: {
                        color: palette.Text.main,
                        borderColor: 'transparent',

                        '&:hover': {
                            backgroundColor: palette.Button.text.secondary.bgHover,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.text.secondary.bgPress,
                        },
                    },
                    critical: {
                        color: palette.Text.critical,
                        borderColor: 'transparent',

                        '&:hover': {
                            backgroundColor: palette.Button.text.critical.bgHover,
                        },
                        '&:active': {
                            backgroundColor: palette.Button.text.critical.bgPress,
                        },
                    },
                },
            }),
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

                    ...paramsToCss(type, color)({
                        contained: {
                            primary: {
                                backgroundColor: palette.Button.contained.primary.enabled,
                                borderColor: palette.Button.contained.primary.enabled,
                                color: isLight ? palette.Text.mainInverse : palette.Text.main,
                            },
                            secondary: {
                                backgroundColor: palette.Button.contained.secondary.enabled,
                                borderColor: palette.Button.contained.secondary.enabled,
                                color: palette.Text.mainInverse,
                            },
                            critical: {
                                backgroundColor: palette.Button.contained.critical.enabled,
                                borderColor: palette.Button.contained.critical.enabled,
                                color: isLight ? palette.Text.mainInverse : palette.Text.main,
                            },
                        },
                        outlined: {
                            primary: {
                                background: 'none',
                                borderColor: palette.Button.outline.primary.enabled,
                                color: palette.Text.brand,
                            },
                            secondary: {
                                background: 'none',
                                borderColor: palette.Button.outline.secondary.strokeEnabled,
                                color: palette.Text.main,
                            },
                            critical: {
                                background: 'none',
                                color: palette.Text.critical,
                                borderColor: palette.Button.outline.critical.strokeEnabled,
                            },
                        },
                        text: {
                            primary: {
                                background: 'none',
                                color: palette.Text.brand,
                            },
                            secondary: {
                                background: 'none',
                                color: palette.Text.main,
                            },
                            critical: {
                                background: 'none',
                                color: palette.Text.critical,
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
                            backgroundColor: palette.Button.contained.primary.disabled,
                            borderColor: 'transparent',
                            color: isLight ? palette.Text.mainInverse : palette.Text.tertiary,
                        },
                        outlined: {
                            backgroundColor: 'transparent',
                            borderColor: palette.Button.outline.primary.strokeDisabled,
                            color: isLight ? palette.Text.tertiary : palette.Text.tertiaryInverse,
                        },
                        text: {
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                            color: isLight ? palette.Text.tertiary : palette.Text.tertiaryInverse,
                        },
                    }),
                },
            },
        ],
    });
}, { name: 'SxBaseButton' });

export type BaseButtonStyleKeys = KeysFromUseStyles<typeof useStyles>
