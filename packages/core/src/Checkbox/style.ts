import { KeysFromUseStyles, makeStyles } from '@core/emotion-styles';
import { CheckboxStyleParams } from '@core/src/Checkbox/types';
import { keyframes } from '@emotion/react';
import { typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        size,
        borderRadius,
        hasError,
        disabled,
        checked,
        hover,
        indeterminate,
        disableFocus,
    }: Required<CheckboxStyleParams>,
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
                color: palette.Checkbox.active.bg,
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
                border: `1px solid ${palette.Checkbox.enabled.stroke}`,

                transition: transitions.create(['border-color', 'background-color', 'box-shadow'], {
                    duration: transitions.duration.short,
                }),
            },
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
            checked && {
                borderColor: palette.Checkbox.active.bg,
                backgroundColor: palette.Checkbox.active.bg,
            },
            checked && hover && {
                borderColor: palette.Checkbox.active.bgHover,
                backgroundColor: palette.Checkbox.active.bgHover,
            },
            hasError && {
                borderColor: palette.Checkbox.critical.stroke,
            },
            hasError && checked && {
                backgroundColor: palette.Checkbox.critical.bg,
            },
            disabled && {
                borderColor: 'transparent',
                backgroundColor: palette.Checkbox.disabled.bg,
            },
        ],
        icon: [
            {
                position: 'absolute',
                display: 'block',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 3,
                opacity: 0,
                fill: 'currentColor',
                color: palette.Checkbox.enabled.iconHover,

                transition: transitions.create(['border-color', 'background-color', 'opacity'], {
                    duration: transitions.duration.short,
                }),
            },
            size === 'small' && {
                left: 2,
            },
            indeterminate && {
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 8,
                height: 2,
                borderRadius: 4,
                backgroundColor: palette.Checkbox.enabled.iconHover,
            },
            indeterminate && size === 'large' && {
                width: 10,
            },
            (checked || hover) && {
                opacity: 1,
            },
            checked && {
                color: palette.Checkbox.active.icon,
            },
            disabled && {
                color: palette.Checkbox.disabled.icon,
            },
            indeterminate && checked && {
                backgroundColor: palette.Checkbox.active.icon,
            },
            indeterminate && disabled && {
                backgroundColor: palette.Checkbox.disabled.icon,
            },
        ],
        overlay: [
            {
                position: 'absolute',
                left: 0,
                width: 0,
                height: '100%',
                overflow: 'hidden',
                backgroundColor: 'transparent',
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
                    boxShadow: `inset 0 0 0 1px ${palette.ContainerState.focus2}`,
                    borderColor: palette.ContainerState.focus2,
                    outline: 'none',
                },
            },
        ],
        content: [
            {
                color: palette.Text.main,
                marginLeft: 12,
            },
            disabled && {
                color: palette.Text.secondary,
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
