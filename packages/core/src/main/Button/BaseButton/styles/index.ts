import { typography } from '@core/styles';
import { KeysFromUseStyles, makeStyles, ButtonStyleParams } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { cssVar } from '@core/utils/cssVars';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { flexCenter } from '../../mixins';
import { BaseButtonCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    { palette, transitions, borders, borderRadii },
    { type, size, color, borderRadius, loading, disabled }: ButtonStyleParams,
    {
        cssFocusColor,
        cssFocusWidth,
        cssBorderWidth,
        cssPaddingX,
        cssPaddingY,
    }: Record<BaseButtonCSSVarKeys, string>,
) => {
    const isLight = palette.type === 'light';
    const disabledOrLoading = disabled || loading;

    const createdBorders = borders.create({
        color: 'transparent',
        size: 'small',
    });

    const calcPaddingY = `calc(${cssVar(cssPaddingY)} - ${cssVar(cssBorderWidth)})`;
    const calcPaddingX = `calc(${cssVar(cssPaddingX)} - ${cssVar(cssBorderWidth)})`;

    return ({
        root: [
            flexCenter,
            createdBorders,

            {
                [cssFocusWidth]: '3px',
                [cssBorderWidth]: createdBorders.borderWidth,

                boxSizing: 'border-box',
                position: 'relative',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                borderRadius: borderRadii[borderRadius],
                color: palette.colors[color].contrastText,
                padding: `${calcPaddingY} ${calcPaddingX}`,
                borderWidth: cssVar(cssBorderWidth),
                height: 'max-content',
                '-webkit-tap-highlight-color': 'transparent',

                transition: transitions.create(['background-color', 'border-color'], {
                    duration: transitions.duration.shorter,
                }),

                '&:focus-visible': {
                    outline: 'none',
                },
            },

            baseFocusStyles({
                transitions,
                focusWidth: cssVar(cssFocusWidth),
                borderWidth: cssVar(cssBorderWidth),
            }),

            type !== 'contained' && !disabledOrLoading && {
                '&:hover, &:focus-visible': {
                    background: palette.colors[color].alpha.min,
                },
                '&:active': {
                    background: palette.colors[color].alpha[16],
                },
            },

            type !== 'contained' && !(color === 'secondary' && !isLight) && {
                color: palette.colors[color].default,
            },

            paramsToCss(size)({
                xSmall: {
                    [cssPaddingY]: '6px',
                    [cssPaddingX]: '12px',
                    ...typography.Text.M.Medium,
                },
                small: {
                    [cssPaddingY]: '10px',
                    [cssPaddingX]: '16px',
                    ...typography.Text.M.Medium,
                },
                medium: {
                    [cssPaddingY]: '14px',
                    [cssPaddingX]: '20px',
                    ...typography.Text.L.Medium,
                },
                large: {
                    [cssPaddingY]: '16px',
                    [cssPaddingX]: '24px',
                    ...typography.Text.XL.Medium,
                },
            }),

            /* Color */
            paramsToCss(type)({
                text: {
                    background: 'transparent',
                    borderColor: 'transparent',
                },
                outlined: {
                    background: 'transparent',
                    borderColor: palette.colors[color].border,
                },
                contained: {
                    backgroundColor: palette.colors[color].default,
                    borderColor: 'transparent',

                    ...!disabledOrLoading && {
                        '&:hover, &:focus-visible': {
                            backgroundColor: palette.colors[color].hover,
                        },
                        '&:active': {
                            backgroundColor: palette.colors[color].press,
                        },
                    },
                },
            }),

            !disabledOrLoading && {
                [cssFocusColor]: palette.border.focus.main,
                '&:focus-visible': {
                    borderColor: 'transparent',

                    ...stylesWithFocus({
                        borderColor: cssVar(cssFocusColor),
                    }),
                },
            },

            type === 'contained' && color === 'secondary' && !disabledOrLoading && isLight && {
                [cssFocusColor]: palette.border.focus.inverse,
                '&:focus-visible': {
                    borderColor: cssVar(cssFocusColor),
                },
            },

            size === 'xSmall' && paramsToCss(borderRadius)({
                small: {
                    borderRadius: borderRadii.xSmall,
                },
                medium: {
                    borderRadius: borderRadii.small,
                },
                large: {
                    borderRadius: borderRadii.medium,
                },
                xLarge: {
                    borderRadius: borderRadii.large,
                },
            }),

            loading && {
                '&&': {
                    cursor: 'unset',

                    ...paramsToCss(type)({
                        contained: {
                            color: palette.colors[color].contrastText,
                        },

                        outlined: {
                            color: palette.text.main,
                        },

                        text: {
                            color: palette.text.main,
                        },
                    }),
                },
            },

            disabled && {
                '&&': {
                    cursor: 'not-allowed',
                    borderColor: 'transparent',
                    color: palette.disabled.contrast,

                    ...paramsToCss(type)({
                        contained: {
                            backgroundColor: palette.disabled.bg,
                        },
                        outlined: {
                            backgroundColor: 'transparent',
                            borderColor: palette.disabled.border,
                        },
                        text: {
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                        },
                    }),
                },
            },
        ],

        loader: {
            position: 'absolute',
        },
    });
});

export type BaseButtonStyleKeys = KeysFromUseStyles<typeof useStyles>
export * from './vars';
