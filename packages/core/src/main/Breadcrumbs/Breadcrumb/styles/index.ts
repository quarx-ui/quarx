import { paramsToCss, QX_SIZE } from '@core';
import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { BreadcrumbStyleParams } from '../../struct';
import { BreadcrumbCSSVarKeys } from './vars';
import { BREADCRUMB_TYPE } from './constants';

export const useStyles = makeStyles((
    { palette, transitions, typography },
    {
        color,
        size,
        type,
        disableFocus,
    }: BreadcrumbStyleParams,
    {
        cssBorderWidth,
        cssFocusColor,
        cssFocusWidth,
    }: Record<BreadcrumbCSSVarKeys, string>,
) => ({
    root: [
        {
            display: 'flex',
            width: 'fit-content',
            boxSizing: 'border-box',
            cursor: 'pointer',
            userSelect: 'none',
            textDecoration: 'none',
            outline: 'none',
            [cssBorderWidth]: '1px',
            [cssFocusWidth]: '2px',
        },
        baseFocusStyles({
            transitions,
            borderWidth: cssVar(cssBorderWidth),
            focusWidth: cssVar(cssFocusWidth),
        }),
        paramsToCss(type)({
            [BREADCRUMB_TYPE.link]: {
                position: 'relative',

                [cssFocusColor]: palette.border.focus.main,
                borderRadius: 4,

                ...typography.base.text[size],
                color: palette.colors[color].default,
                fontWeight: 500,

                transition: transitions.create(
                    ['color', 'border-color'],
                    { duration: transitions.duration.shortest },
                ),

                '&:before': {
                    content: '""',
                    position: 'absolute',
                    borderRadius: 0,
                    borderBottom: '1px solid',
                    borderBottomColor: 'transparent',
                    bottom: -2,
                    left: 0,
                    right: 0,

                    transition: transitions.create(
                        ['border-bottom-color'],
                        { duration: transitions.duration.shortest },
                    ),
                },
                '&:hover:before': {
                    borderBottomColor: palette.colors[color].default,
                },
                '&:active:before': {
                    borderBottomColor: palette.colors[color].press,
                },

                '&:active': {
                    color: palette.colors[color].press,
                },
                '&:focus-visible': !disableFocus && stylesWithFocus({
                    borderColor: cssVar(cssFocusColor),
                }),
            },
            [BREADCRUMB_TYPE.contained]: {
                [cssFocusColor]: palette.colors.brand.default,
                borderRadius: 6,

                color: palette.text.main,
                ...typography.base.text[size],
                fontWeight: 400,

                transition: transitions.create(
                    ['background-color'],
                    { duration: transitions.duration.shortest },
                ),

                '&:hover': { backgroundColor: palette.background.container.hover },
                '&:active': { backgroundColor: palette.colors.secondary.alpha[16] },
                '&:focus-visible': !disableFocus && stylesWithFocus({
                    borderColor: cssVar(cssFocusColor),
                }),

                ...paramsToCss(size)({
                    [QX_SIZE.small]: { padding: '0 4px' },
                    [QX_SIZE.medium]: { padding: '0 4px' },
                    [QX_SIZE.large]: { padding: '0 6px' },
                }),
            },
        }),
    ],
}));

export type BreadcrumbStyleKeys = KeysFromUseStyles<typeof useStyles>;
