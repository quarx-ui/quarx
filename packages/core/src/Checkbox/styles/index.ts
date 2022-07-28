import { KeysFromUseStyles, makeStyles, typography } from '@core';
import { keyframes } from '@emotion/react';
import { paramsToCss } from '@core/utils/paramsToCss';
import { PALETTE_COLORS } from '@core/styles';
import { SelectionSize } from '@core/src/Selection/styles';
import { CheckboxStyleParams } from './types';

const CheckMarkOffset: Record<
SelectionSize,
Record<'base' | 'brandColor', number>
> = {
    small: {
        base: 1,
        brandColor: 2,
    },
    medium: {
        base: 1.5,
        brandColor: 2.5,
    },
    large: {
        base: 2,
        brandColor: 3,
    },
};

export const useStyles = makeStyles((
    { palette, transitions },
    {
        size,
        borderRadius,
        color = PALETTE_COLORS.brand,
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

    const checkboxContainerMain = {
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
    };

    const inputFocusMain = {
        '&:focus-visible + .SxCheckbox-checkboxContainer': {
            boxShadow: `inset 0px 0px 0px 2px ${palette.border.focus.dark}`,
        },
    };

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
                [PALETTE_COLORS.brand]: checkboxContainerMain,
                [PALETTE_COLORS.secondary]: checkboxContainerMain,
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
                        borderRadius: 4,
                    },
                    medium: {
                        borderRadius: 4,
                    },
                    large: {
                        borderRadius: 4,
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
                transform: 'translateY(-50%)',
                opacity: 0,
                fill: 'currentColor',
                color: palette.border.secondary,

                transition: transitions.create(['border-color', 'background-color', 'opacity'], {
                    duration: transitions.duration.short,
                }),

                ...checked && {
                    color: palette.colors[color].contrastText,
                },
            },

            paramsToCss(color)({
                [color]: {
                    left: CheckMarkOffset[size].base,
                },
                [PALETTE_COLORS.brand]: {
                    left: CheckMarkOffset[size].brandColor,
                },
                [PALETTE_COLORS.secondary]: {
                    left: CheckMarkOffset[size].brandColor,
                },
            }),

            (checked || hover) && {
                opacity: 1,
            },

            disabled && {
                color: palette.disabled.main,
            },

            indeterminate && {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 8,
                height: 2,
                borderRadius: 4,
                backgroundColor: palette.colors[color].contrastText,
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
                    borderColor: palette.border.focus.dark,
                    outline: 'none',
                },
            },
            !disableFocus && paramsToCss(color)({
                [color]: {
                    '&:focus-visible + .SxCheckbox-checkboxContainer': {
                        boxShadow: `inset 0px 0px 0px 1px ${palette.border.focus.dark}`,
                    },
                },
                [PALETTE_COLORS.brand]: inputFocusMain,
                [PALETTE_COLORS.secondary]: inputFocusMain,
            }),
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
