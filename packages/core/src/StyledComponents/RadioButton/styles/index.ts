import { KeysFromUseStyles, makeStyles, PALETTE_COLORS, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { CSSObject } from '@emotion/react';
import { RadioButtonStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        color = PALETTE_COLORS.brand,
        size,
        hover,
        disableFocus,
        disabled,
        checked,
    }: RadioButtonStyleParams,
) => {
    const baseColorProps: CSSObject = {
        border: '1px solid',
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

    return ({
        root: [
            {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                cursor: 'pointer',
            },
            disabled && {
                cursor: 'not-allowed',
            },
        ],

        input: [
            {
                position: 'absolute',
                appearance: 'none',
            },
            !disableFocus && {
                '&:focus-visible + .SxRadioButton-marker': {
                    borderWidth: 3,
                    borderColor: palette.border.focus.dark,
                    outline: 'none',
                },
            },
            !checked && !disableFocus && !disabled && {
                '&:focus-visible + .SxRadioButton-marker': {
                    backgroundColor: 'transparent',
                    outline: 'none',
                },
            },
        ],

        marker: [
            {
                borderRadius: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: transitions.create(['background-color', 'border-color']),
            },

            paramsToCss(size)({
                small: {
                    height: 16,
                    width: 16,
                },
                medium: {
                    height: 18,
                    width: 18,
                },
                large: {
                    height: 20,
                    width: 20,
                },
            }),

            paramsToCss(color)({
                [color]: {
                    border: '2px solid',
                    borderColor: palette.colors[color].default,
                    ...checked && {
                        backgroundColor: palette.colors[color].default,
                        borderColor: 'transparent',
                    },
                    ...checked && hover && {
                        backgroundColor: palette.colors[color].hover,
                    },
                },
                [PALETTE_COLORS.brand]: baseColorProps,
                [PALETTE_COLORS.secondary]: baseColorProps,
            }),

            disabled && {
                border: '1px solid',
                borderColor: palette.disabled.border,
            },
            disabled && checked && {
                borderColor: 'transparent',
                backgroundColor: palette.disabled.bg,
            },
        ],

        markerDot: [
            {
                position: 'absolute',
                borderRadius: '100%',
                backgroundColor: 'transparent',
                transition: transitions.create('background-color'),
            },

            paramsToCss(size)({
                [size]: {
                    width: 8,
                    height: 8,
                },
                small: {
                    width: 6,
                    height: 6,
                },
            }),

            paramsToCss(color)({
                [color]: {
                    backgroundColor: palette.colors[color].contrastText,
                    ...hover && !checked && {
                        backgroundColor: palette.text.tertiary,
                    },
                    ...disabled && {
                        backgroundColor: palette.colors[color].contrastText,
                    },
                },
            }),
        ],

        content: [
            {
                marginLeft: 12,
            },
            paramsToCss(size)({
                small: typography.Text.M.Regular,
                medium: typography.Text.L.Regular,
                large: typography.Text.XL.Regular,
            }),
        ],
    });
}, { name: 'SxRadioButton' });

export type RadioButtonStyleKeys = KeysFromUseStyles<typeof useStyles>

export * from './types';
