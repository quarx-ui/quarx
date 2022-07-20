import { KeysFromUseStyles, makeStyles, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { RadioButtonStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions },
    { size, hover, disableFocus, hasError, disabled, checked }: Required<RadioButtonStyleParams>,
) => ({
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
                borderWidth: 2,
                borderColor: palette.border.focus.dark,
            },
        },
        !checked && !hasError && !disableFocus && !disabled && {
            '&:focus-visible + .SxRadioButton-marker': {
                backgroundColor: 'transparent',
            },
        },
        checked && !hasError && !disableFocus && {
            '&:focus-visible + .SxRadioButton-marker': {
                backgroundColor: palette.colors.brand.default,
            },
        },
        checked && hasError && !disableFocus && {
            '&:focus-visible + .SxRadioButton-marker': {
                backgroundColor: palette.colors.danger.default,
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
            // backgroundColor: palette.RadioButton.enabled.bg,
            border: `1px solid ${palette.border.secondary}`,
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

        checked && {
            backgroundColor: palette.colors.brand.default,
            borderColor: 'transparent',
        },
        hover && checked && {
            backgroundColor: palette.colors.brand.hover,
        },
        hasError && {
            borderColor: palette.colors.danger.default,
        },
        hasError && checked && {
            backgroundColor: palette.colors.danger.default,
        },
        (disabled || (disabled && hasError)) && {
            backgroundColor: palette.text.tertiary,
            borderColor: 'transparent',
        },
        disabled && checked && {
            backgroundColor: palette.text.tertiary,
        },
    ],
    markerDot: [
        {
            position: 'absolute',
            borderRadius: '100%',
            width: 8,
            height: 8,
            backgroundColor: 'transparent',
            transition: transitions.create('background-color'),
        },
        size === 'small' && {
            width: 6,
            height: 6,
        },
        disabled && {
            backgroundColor: 'transparent',
        },
        (checked || (checked && !hasError) || (checked && disabled))
            && {
                backgroundColor: palette.text.constant,
            },
        !checked && !disabled && hover && {
            backgroundColor: palette.border.secondary,
        },
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
}), { name: 'SxRadioButton' });

export type RadioButtonStyleKeys = KeysFromUseStyles<typeof useStyles>

export * from './types';
