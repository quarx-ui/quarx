import { CHECKBOX_COLOR, KeysFromUseStyles, makeStyles, typography } from '@core';
import { keyframes } from '@emotion/react';
import { paramsToCss } from '@core/utils/paramsToCss';
import { CheckboxStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        size,
        borderRadius,
        color,
        disabled,
        checked,
        hover,
        indeterminate,
        disableFocus,
    }: CheckboxStyleParams,
) => {
    const checkboxCheck = keyframes({
        '33%': {
            width: '0',
        },
        '100%': {
            width: '100%',
        },
    });
    return ({
        root: [
            {
                color: palette.colors.brand.default,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: transitions.create('color', {
                    duration: transitions.duration.short,
                }),
            },
            disabled && {
                cursor: 'not-allowed',
            },
        ],

        checkboxContainer: [
            {
                position: 'relative',
                boxSizing: 'border-box',
                background: 'transparent',

                transition: transitions.create(['border-color', 'background-color', 'box-shadow'], {
                    duration: transitions.duration.short,
                }),

                border: '2px solid',
                backgroundColor: palette.background.main,
                borderColor: palette.colors[color].default,
                ...checked && {
                    backgroundColor: palette.colors[color].default,
                },
                ...checked && hover && {
                    borderColor: palette.colors[color].hover,
                    backgroundColor: palette.colors[color].hover,
                },
            },
            paramsToCss(color)({
                [CHECKBOX_COLOR.brand]: {
                    border: '1px solid',
                    backgroundColor: palette.background.main,
                    borderColor: palette.border.secondary,
                    ...checked && {
                        backgroundColor: palette.colors[color].default,
                        borderColor: palette.colors[color].default,
                    },
                    ...checked && hover && {
                        borderColor: palette.colors[color].hover,
                        backgroundColor: palette.colors[color].hover,
                    },
                },
            }),
            paramsToCss(size)({
                small: {
                    width: 16,
                    height: 16,
                },
                medium: {
                    width: 18,
                    height: 18,
                },
                large: {
                    width: 20,
                    height: 20,
                },
            }),
            paramsToCss(borderRadius, size)({
                square: {
                    small: {
                        borderRadius: 2,
                    },
                    medium: {
                        borderRadius: 2,
                    },
                    large: {
                        borderRadius: 2,
                    },
                },
                smooth: {
                    small: {
                        borderRadius: 4,
                    },
                    medium: {
                        borderRadius: 5,
                    },
                    large: {
                        borderRadius: 6,
                    },
                },
            }),
            disabled && {
                borderColor: palette.disabled.bg,
                backgroundColor: palette.background.main,
            },
            disabled && checked && {
                borderColor: 'transparent',
                backgroundColor: palette.disabled.bg,
            },
        ],
        icon: [
            {
                position: 'absolute',
                display: 'block',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                fill: 'currentColor',
                color: palette.border.secondary,

                transition: transitions.create(['border-color', 'background-color', 'opacity'], {
                    duration: transitions.duration.short,
                }),

                ...checked && {
                    color: palette.colors[color].contrastText,
                },
                ...indeterminate && {
                    backgroundColor: palette.colors[color].contrastText,
                },
            },
            (checked || hover) && {
                opacity: 1,
            },

            disabled && {
                color: palette.disabled.main,
            },

            indeterminate && {
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 8,
                height: 2,
                borderRadius: 4,
            },
            indeterminate && hover && !checked && {
                backgroundColor: palette.border.secondary,
            },
            indeterminate && disabled && {
                backgroundColor: palette.disabled.main,
            },
        ],
        overlay: [
            {
                position: 'absolute',
                left: 0,
                width: 0,
                height: '100%',
                overflow: 'hidden',
            },
            hover && !disabled && {
                width: '100%',
            },
            checked && !indeterminate && {
                animation: `${checkboxCheck} ${transitions.duration.complex}ms ${transitions.easing.easeOut} forwards`,
            },
            checked && indeterminate && {
                width: '100%',
            },
        ],
        input: [
            {
                height: 0,
                width: 0,
                position: 'absolute',
                opacity: 0,
            },
            !disableFocus && {
                '&:focus-visible + .SxCheckbox-checkboxContainer': {
                    boxShadow: `inset 0 0 0 1px ${palette.border.focus.dark}`,
                    borderColor: palette.border.focus.dark,
                    outline: 'none',
                },
            },
        ],
        content: [
            {
                color: palette.text.main,
                marginLeft: 12,
            },
            disabled && {
                color: palette.text.secondary,
            },
            paramsToCss(size)({
                small: typography.Text.M.Regular,
                medium: typography.Text.L.Regular,
                large: typography.Text.XL.Regular,
            }),
        ],
    });
}, { name: 'SxCheckbox' });

export type CheckboxStyleKeys = KeysFromUseStyles<typeof useStyles>;

export * from './types';
