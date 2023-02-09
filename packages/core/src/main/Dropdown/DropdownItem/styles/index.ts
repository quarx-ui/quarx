import {
    KeysFromUseStyles,
    makeStyles, typography,
} from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { paramsToCss, QX_SIZE } from '@core';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { DropdownItemCSSVarKeys } from './vars';
import { DropdownItemStyleParams } from './types';
import { gap } from './gap';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        size,
        hover,
        disableFocus,
    }: DropdownItemStyleParams,
    {
        cssBorderWidth,
        cssFocusWidth,
        cssFocusColor,
    }: Record<DropdownItemCSSVarKeys, string>,
) => {
    const text = {
        'text-align': 'left',
        'word-break': 'break-all',
    };

    return ({
        root: [
            {
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                margin: 0,
                cursor: 'pointer',
                outline: 'none',
                userSelect: 'none',
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: 4,
                [cssBorderWidth]: '1px',
                [cssFocusWidth]: '3px',
                [cssFocusColor]: palette.border.focus.main,

                backgroundColor: palette.background.main,
                '-webkit-tap-highlight-color': 'transparent',

                transition: transitions.create(
                    ['background-color', 'padding'],
                    { duration: transitions.duration.shortest },
                ),

                ...baseFocusStyles({
                    transitions,
                    borderWidth: cssVar(cssBorderWidth),
                    focusWidth: cssVar(cssFocusWidth),
                }),

                '&:focus-visible': !disableFocus && stylesWithFocus({
                    borderColor: cssVar(cssFocusColor),
                }),
            },
            paramsToCss(size)({
                [QX_SIZE.small]: {
                    minHeight: 40,
                    padding: '7px 9px',
                    ...gap(8, 'right'),
                },
                [QX_SIZE.medium]: {
                    minHeight: 52,
                    padding: '11px 13px',
                    ...gap(12, 'right'),
                },
                [QX_SIZE.large]: {
                    minHeight: 60,
                    padding: '11px 15px',
                    ...gap(16, 'right'),
                },
            }),
            hover && {
                backgroundColor: palette.background.container.hover,
            },
        ],
        container: [
            { display: 'flex', alignItems: 'center' },
            paramsToCss(size)({
                [QX_SIZE.small]: gap(8, 'right'),
                [QX_SIZE.medium]: gap(12, 'right'),
                [QX_SIZE.large]: gap(16, 'right'),
            }),
        ],
        icon: paramsToCss(size)({
            [QX_SIZE.small]: { marginTop: 2 },
            [QX_SIZE.medium]: { marginTop: 3 },
            [QX_SIZE.large]: { marginTop: 4 },
        }),
        title: [
            { color: palette.text.main, ...text },
            paramsToCss(size)({
                [QX_SIZE.small]: typography.Text.M.Regular,
                [QX_SIZE.medium]: typography.Text.L.Regular,
                [QX_SIZE.large]: typography.Text.XL.Regular,
            }),
        ],
        description: [
            { color: palette.text.secondary, ...text },
            paramsToCss(size)({
                [QX_SIZE.small]: typography.Text.M.Regular,
                [QX_SIZE.medium]: typography.Text.M.Regular,
                [QX_SIZE.large]: typography.Text.L.Regular,
            }),
        ],
        activeIcon: {
            display: 'flex',
            color: palette.text.tertiary,
            alignSelf: 'flex-start',
        },
    });
}, { name: 'QxDropdownItem' });

export type DropdownItemStyleKeys = KeysFromUseStyles<typeof useStyles>;
