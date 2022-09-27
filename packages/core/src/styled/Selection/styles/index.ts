import { paramsToCss } from '@core/utils/paramsToCss';
import { typography, KeysFromUseStyles, makeStyles } from '@core';
import { SelectionStyleParams } from './types';

export const useStyles = makeStyles((
    { transitions },
    { size, borderRadius, disabled, styleHover, focused, subShown }: Required<SelectionStyleParams>,
) => ({
    root: [
        {
            display: 'flex',
            padding: '9px 14px',
            width: 'fit-content',
            transition: transitions.create('background-color'),
            cursor: 'pointer',
        },
        !subShown && {
            alignItems: 'center',
        },
        paramsToCss(borderRadius)({
            square: { borderRadius: 4 },
            smooth: { borderRadius: 8 },
        }),
        styleHover === 'smooth' && !disabled && {
            '&:hover': {
                cursor: 'pointer',
                // backgroundColor: palette.ContainerState.hover,
            },
        },
        focused && {
            // boxShadow: `inset 0 0 0 2px ${palette.ContainerState.focus2}`,
            border: 'none',
            outline: 'none',
        },
        disabled && {
            // color: palette.Text.secondary,
            cursor: 'not-allowed',
        },
    ],

    leftAdornment: [
        {
            display: 'flex',
            alignItems: 'flex-start',
        },
        paramsToCss(size)({
            small: {
                marginRight: 8,
            },
            medium: {
                marginRight: 10,
                paddingTop: 2,
            },
            large: {
                marginRight: 12,
                paddingTop: 3,
            },
        }),
        !subShown && {
            paddingTop: 0,
        },
    ],
    rightAdornment: [
        {
            display: 'flex',
            alignItems: 'flex-start',
        },
        paramsToCss(size)({
            small: {
                marginLeft: 8,
            },
            medium: {
                marginLeft: 10,
                paddingTop: 2,
            },
            large: {
                marginLeft: 12,
                paddingTop: 3,
            },
        }),
        !subShown && {
            paddingTop: 0,
        },
    ],
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: [
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        paramsToCss(size)({
            large: typography.Text.XL.Regular,
            medium: typography.Text.L.Regular,
            small: typography.Text.M.Regular,
        }),
    ],
    subTitleText: [
        // { color: palette.Text.secondary },
        paramsToCss(size)({
            large: typography.Text.L.Regular,
            medium: typography.Text.M.Regular,
            small: typography.Text.M.Regular,
        }),
    ],
    errorText: [
        // { color: palette.Text.critical },
        paramsToCss(size)({
            large: typography.Text.L.Regular,
            medium: typography.Text.M.Regular,
            small: typography.Text.M.Regular,
        }),
    ],

}), { name: 'QxSelection' });

export type SelectionStyleKeys = KeysFromUseStyles<typeof useStyles>;

export * from './types';
