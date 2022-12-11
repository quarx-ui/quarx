import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { paramsToCss } from '@core/utils/paramsToCss/paramsToCss';
import { QX_SIZE } from '@core/enums/QxSize';
import { typography } from '@core/styles/typography/typography';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { SelectionCSSVarKeys } from './vars';
import { SelectionStyleParams } from './types';
import { SELECTION_TYPE } from './constants';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        type,
        color,
        size,
        disabled,
        disableFocus,
        reverse,
        hover,
    }: SelectionStyleParams,
    {
        cssBorderWidth,
        cssFocusColor,
        cssFocusWidth,
    }: Record<SelectionCSSVarKeys, string>,
) => {
    const text = paramsToCss(size)({
        [QX_SIZE.small]: typography.Text.M.Regular,
        [QX_SIZE.medium]: typography.Text.M.Regular,
        [QX_SIZE.large]: typography.Text.L.Regular,
    });

    const box = {
        display: 'flex',
        alignItems: 'flex-start',
        ...paramsToCss(size)({
            [QX_SIZE.small]: { marginTop: 2 },
            [QX_SIZE.medium]: { marginTop: 3 },
            [QX_SIZE.large]: { marginTop: 4 },
        }),
    };

    const rightBoxSideIndent = paramsToCss(size)({
        [QX_SIZE.small]: { marginRight: 8 },
        [QX_SIZE.medium]: { marginRight: 12 },
        [QX_SIZE.large]: { marginRight: 16 },
    });

    const leftBoxSideIndent = paramsToCss(size)({
        [QX_SIZE.small]: { marginLeft: 8 },
        [QX_SIZE.medium]: { marginLeft: 12 },
        [QX_SIZE.large]: { marginLeft: 16 },
    });

    return ({
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            width: '100%',
            border: 'none',
            outline: 'none',

            cursor: 'pointer',
            ...disabled && { cursor: 'not-allowed' },

            '&, & *': {
                transition: transitions.create([
                    'background-color',
                    'color',
                    'margin',
                ], { duration: transitions.duration.shortest }),
            },

            ...reverse && { flexDirection: 'row-reverse' },

            ...paramsToCss(type)({
                [SELECTION_TYPE.text]: { backgroundColor: 'transparent' },
                [SELECTION_TYPE.contained]: {
                    [cssBorderWidth]: '1px',
                    [cssFocusWidth]: '2px',
                    [cssFocusColor]: palette.border.focus.main,
                    ...baseFocusStyles({
                        transitions,
                        borderWidth: cssVar(cssBorderWidth),
                        focusWidth: cssVar(cssFocusWidth),
                    }),

                    backgroundColor: palette.background.main,
                    borderRadius: 8,
                    ...paramsToCss(size)({
                        [QX_SIZE.small]: { padding: 8 },
                        [QX_SIZE.medium]: { padding: 12 },
                        [QX_SIZE.large]: { padding: 16 },
                    }),
                    ...hover && { backgroundColor: palette.background.container.hover },
                    '&:focus-visible': !disableFocus && stylesWithFocus({
                        borderColor: cssVar(cssFocusColor),
                    }),
                },
            }),
        },

        content: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            ...reverse && {
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
            },
        },

        texts: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            overflow: 'auto',
            textAlign: 'justify',
        },

        title: {
            color: palette.text.main,
            wordBreak: 'break-word',
            ...paramsToCss(size)({
                [QX_SIZE.small]: typography.Text.M.Regular,
                [QX_SIZE.medium]: typography.Text.L.Regular,
                [QX_SIZE.large]: typography.Text.XL.Regular,
            }),
            ...disabled && { color: palette.text.secondary },
        },

        description: {
            color: palette.text.secondary,
            wordBreak: 'break-word',
            ...text,
            ...disabled && { color: palette.text.tertiary },
        },

        helperText: {
            color: palette.colors[color].default,
            wordBreak: 'break-word',
            ...text,
            ...disabled && { color: palette.text.tertiary },
            textAlign: 'justify',
        },

        controller: [
            box,
            reverse
                ? leftBoxSideIndent
                : rightBoxSideIndent,
        ],
    });
}, { name: 'QxSelection' });

export type SelectionStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
