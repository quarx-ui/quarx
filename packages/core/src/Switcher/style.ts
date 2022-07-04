import { colors, SWITCHER_POSITION, SwitcherStyleParams, typography, KeysFromUseStyles, makeStyles } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
// TODO: colors from palette

export const useStyles = makeStyles((
    { palette, transitions },
    { size, checked, hasError, disabled, hover, position, disableFocus }: Required<SwitcherStyleParams>,
) => ({
    wrapper: { display: 'inline-flex' },

    root: [
        {
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            cursor: 'pointer',
        },
        disabled && {
            cursor: 'not-allowed',
        },
    ],

    input: [
        {
            margin: 0,
            appearance: 'none',
        },
        !disableFocus && {
            '&:focus-visible + .SxSwitcher-toggleContainer': {
                borderColor: palette.border.focus.dark,
                boxShadow: `inset 0 0 0 1px ${palette.border.focus.dark}`,
                outline: 'none',
            },
        },
    ],

    toggleContainer: [
        {
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            borderRadius: 10,
            transition: transitions.create(['color', 'background-color', 'border-color', 'box-shadow'], {
                duration: transitions.duration.shortest,
            }),
            border: '1px solid',
            borderColor: colors.Black[24],
            backgroundColor: palette.background.main,
        },
        hover && {
            borderColor: colors.Black[32],
        },
        checked && {
            border: '1px solid',
            borderColor: colors.Emerald[500],
            backgroundColor: colors.Emerald[500],
        },
        checked && hover && {
            border: '1px solid',
            borderColor: colors.Emerald[400],
            backgroundColor: colors.Emerald[400],
        },
        hasError && {
            borderColor: colors.Red[600],
            boxShadow: `inset 0 0 0 1px ${colors.Red[600]}`,
        },
        hasError && checked && {
            backgroundColor: colors.Red[600],
            borderColor: colors.Red[600],
        },
        disabled && {
            borderColor: '#E1E4E5',
            boxShadow: 'none',
            backgroundColor: colors.White[100],
        },
        disabled && checked && {
            border: '1px solid',
            borderColor: '#E1E4E5',
            backgroundColor: '#E1E4E5',
        },
        paramsToCss(size)({
            small: {
                minWidth: 26,
                width: 26,
                height: 16,
            },
            medium: {
                width: 30,
                minWidth: 30,
                height: 18,
            },
            large: {
                minWidth: 34,
                width: 34,
                height: 20,
            },
        }),
    ],

    toggle: [
        {
            marginRight: 2,
            marginLeft: 2,
            borderRadius: 10,
            backgroundColor: colors.Black[24],
            transition: transitions.create(['background-color', 'margin'], {
                duration: transitions.duration.shortest,
            }),
        },
        hover && {
            backgroundColor: colors.Black[32],
        },
        checked && {
            backgroundColor: colors.White[100],
        },
        disabled && {
            backgroundColor: colors.Black[8],
        },
        disabled && checked && {
            backgroundColor: colors.White[100],
        },
        paramsToCss(size)({
            small: {
                width: 10,
                minWidth: 10,
                height: 10,
            },
            medium: {
                width: 12,
                minWidth: 12,
                height: 12,
            },
            large: {
                width: 14,
                minWidth: 14,
                height: 14,
            },
        }),
        checked && paramsToCss(size)({
            small: { marginLeft: 11 },
            medium: { marginLeft: 13 },
            large: { marginLeft: 15 },
        }),
    ],

    content: [
        { color: palette.text.main },
        paramsToCss(size)({
            small: typography.Text.M.Regular,
            medium: typography.Text.L.Regular,
            large: typography.Text.XL.Regular,
        }),
        paramsToCss(position)({
            [SWITCHER_POSITION.left]: { marginLeft: 12 },
            [SWITCHER_POSITION.right]: { marginRight: 12 },
        }),
    ],
}), { name: 'SxSwitcher' });

export type SwitcherStyleKeys = KeysFromUseStyles<typeof useStyles>;
