import { SWITCHER_POSITION, typography, KeysFromUseStyles, makeStyles, PALETTE_COLORS } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { SwitcherStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        size,
        checked,
        color = PALETTE_COLORS.brand,
        disabled,
        hover,
        position,
        disableFocus,
    }: SwitcherStyleParams,
) => {
    const toggleWrapperStates = {
        ...checked && {
            border: 'none',
            backgroundColor: palette.colors[color].default,
        },
        ...checked && hover && {
            border: 'none',
            backgroundColor: palette.colors[color].hover,
        },
    };

    const toggleStates = {
        ...hover && {
            borderRadius: 8,
        },
        ...checked && {
            backgroundColor: palette.colors[color].contrastText,
        },
    };

    return {
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
                    outline: 'none',
                    ...paramsToCss(color)({
                        [PALETTE_COLORS.brand]: {
                            boxShadow: `inset 0px 0px 0px 1px ${palette.border.focus.dark}`,
                        },
                        [PALETTE_COLORS.secondary]: {
                            boxShadow: `inset 0px 0px 0px 1px ${palette.border.focus.dark}`,
                        },
                    }),
                    ...checked && {
                        boxShadow: `inset 0px 0px 0px 2px ${palette.border.focus.dark}`,
                    },
                },
            },
        ],

        toggleContainer: [
            {
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                borderRadius: 10,
                transition: transitions.create(['color', 'background-color', 'border-color'], {
                    duration: transitions.duration.shortest,
                }),
            },

            paramsToCss(color)({
                [color]: {
                    border: '2px solid',
                    borderColor: palette.colors[color].default,
                    backgroundColor: 'transparent',
                    ...hover && {
                        borderColor: palette.colors[color].hover,
                    },
                    ...toggleWrapperStates,
                },
                [PALETTE_COLORS.brand]: {
                    border: '1px solid',
                    borderColor: palette.border.secondary,
                    backgroundColor: 'transparent',
                    ...hover && {
                        borderColor: palette.text.tertiary,
                    },
                    ...toggleWrapperStates,
                },
                [PALETTE_COLORS.secondary]: {
                    border: '1px solid',
                    borderColor: palette.border.secondary,
                    backgroundColor: 'transparent',
                    ...hover && {
                        borderColor: palette.text.tertiary,
                    },
                    ...toggleWrapperStates,
                },
            }),

            disabled && {
                border: '1px solid',
                borderColor: palette.disabled.border,
                backgroundColor: 'transparent',
            },
            disabled && checked && {
                border: 'none',
                backgroundColor: palette.disabled.bg,
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
                position: 'absolute',
                borderRadius: 10,
                transition: transitions.create(['background-color', 'border-color', 'left'], {
                    duration: transitions.duration.shortest,
                }),
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
            paramsToCss(size)({
                small: { left: 2 },
                medium: { left: 2 },
                large: { left: 2 },
            }),
            checked && paramsToCss(size)({
                small: { left: 13 },
                medium: { left: 15 },
                large: { left: 16 },
            }),

            paramsToCss(color)({
                [color]: {
                    backgroundColor: palette.colors[color].border,
                    borderRadius: 10,
                    ...toggleStates,
                },
                [PALETTE_COLORS.brand]: {
                    backgroundColor: palette.text.tertiary,
                    borderRadius: 10,
                    ...toggleStates,
                },
                [PALETTE_COLORS.secondary]: {
                    backgroundColor: palette.text.tertiary,
                    borderRadius: 10,
                    ...toggleStates,
                },
            }),

            disabled && {
                backgroundColor: palette.disabled.border,
            },
            disabled && checked && {
                backgroundColor: palette.text.constant,
            },
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
    };
}, { name: 'SxSwitcher' });

export type SwitcherStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
