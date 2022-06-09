import { KeysFromUseStyles, makeStyles } from '@core/emotion-styles';
import { RadioButtonStyleParams } from '@core/src/RadioButton/types';
import { paramsToCss } from '@core/utils/paramsToCss';
import { typography } from '@core';

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
                borderColor: palette.ContainerState.focus2,
            },
        },
        !checked && !hasError && !disableFocus && !disabled && {
            '&:focus-visible + .SxRadioButton-marker': {
                backgroundColor: 'transparent',
            },
        },
        checked && !hasError && !disableFocus && {
            '&:focus-visible + .SxRadioButton-marker': {
                backgroundColor: palette.Checkbox.active.bg,
            },
        },
        checked && hasError && !disableFocus && {
            '&:focus-visible + .SxRadioButton-marker': {
                backgroundColor: palette.Checkbox.critical.stroke,
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
            backgroundColor: palette.RadioButton.enabled.bg,
            border: `1px solid ${palette.RadioButton.enabled.stroke}`,
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
            backgroundColor: palette.RadioButton.active.bg,
            borderColor: 'transparent',
        },
        hover && checked && {
            backgroundColor: palette.Checkbox.active.bgHover,
        },
        hasError && {
            borderColor: palette.RadioButton.critical.bg,
        },
        hasError && checked && {
            backgroundColor: palette.RadioButton.critical.bg,
        },
        (disabled || (disabled && hasError)) && {
            backgroundColor: palette.Checkbox.disabled.bg,
            borderColor: 'transparent',
        },
        disabled && checked && {
            backgroundColor: palette.Checkbox.disabled.bg,
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
                backgroundColor: palette.Checkbox.active.icon,
            },
        !checked && !disabled && hover && {
            backgroundColor: palette.Checkbox.enabled.iconHover,
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
