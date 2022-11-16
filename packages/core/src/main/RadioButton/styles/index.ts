import { cssVar, KeysFromUseStyles, makeStyles, PALETTE_COLORS, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { RadioButtonCSSVarKeys } from './vars';
import { RADIO_BUTTON_POSITION } from '../constants';
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
        position,
    }: RadioButtonStyleParams,
    {
        cssDotSize,
        cssBorderWidth,
        cssBorderColor,
        cssDisabledColor,
        cssSize,
        cssFocusWidth,
        cssFocusColor,
        cssContentMargin,
    }: Record<RadioButtonCSSVarKeys, string>,
) => {
    const brandOrSecondary = color === 'brand' || color === 'secondary';

    return ({
        root: [
            {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                '-webkit-tap-highlight-color': 'transparent',

                [cssFocusColor]: palette.border.focus.main,
                [cssFocusWidth]: '3px',
                [cssDisabledColor]: palette.disabled.border,
                [cssContentMargin]: '12px',
            },

            !brandOrSecondary && {
                [cssBorderWidth]: '2px',
                [cssBorderColor]: palette.colors[color].default,
            },

            brandOrSecondary && {
                [cssBorderWidth]: '1px',
                [cssBorderColor]: palette.border.secondary,
            },

            paramsToCss(size)({
                small: {
                    [cssSize]: '16px',
                    [cssDotSize]: '6px',
                },
                medium: {
                    [cssSize]: '18px',
                    [cssDotSize]: '8px',
                },
                large: {
                    [cssSize]: '20px',
                    [cssDotSize]: '8px',
                },
            }),

            disabled && {
                '&&': {
                    cursor: 'not-allowed',
                },
            },
        ],

        input: [
            {
                position: 'absolute',
                appearance: 'none',
                outline: 'none',
            },

            !disableFocus && !disabled && {
                '&:focus-visible + .QxRadioButton-marker': {
                    outline: 'none',
                    borderColor: 'transparent',

                    ...stylesWithFocus({
                        borderColor: cssVar(cssFocusColor),
                    }),
                },
            },

            !checked && !disableFocus && !disabled && {
                '&:focus-visible + .QxRadioButton-marker': {
                    backgroundColor: 'transparent',
                },
            },
        ],

        marker: [
            {
                borderRadius: '100%',
                boxSizing: 'border-box',
                borderStyle: 'solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: cssVar(cssBorderWidth),
                borderColor: cssVar(cssBorderColor),
                transition: transitions.create(['background-color', 'border-color']),
                width: cssVar(cssSize),
                minWidth: cssVar(cssSize),
                height: cssVar(cssSize),
                minHeight: cssVar(cssSize),
            },

            baseFocusStyles({
                transitions,
                borderWidth: cssVar(cssBorderWidth),
                focusWidth: cssVar(cssFocusWidth),
            }),

            checked && {
                '&&': {
                    [cssDisabledColor]: palette.disabled.bg,
                    backgroundColor: palette.colors[color].default,
                    borderColor: 'transparent',
                },
            },

            checked && hover && {
                '&&': {
                    backgroundColor: palette.colors[color].hover,
                    borderColor: 'transparent',
                },
            },

            disabled && {
                '&&': {
                    borderColor: cssVar(cssDisabledColor),
                },
            },

            disabled && checked && {
                '&&': {
                    borderColor: 'transparent',
                    backgroundColor: cssVar(cssDisabledColor),
                },
            },
        ],

        markerDot: [
            {
                position: 'absolute',
                borderRadius: '100%',
                transition: transitions.create('background-color'),
                width: cssVar(cssDotSize),
                height: cssVar(cssDotSize),
                backgroundColor: palette.colors[color].contrastText,
            },

            hover && !checked && {
                '&&': {
                    backgroundColor: palette.text.tertiary,
                },
            },

            disabled && {
                '&&': {
                    backgroundColor: palette.colors[color].contrastText,
                },
            },
        ],

        content: [
            paramsToCss(position)({
                [RADIO_BUTTON_POSITION.left]: {
                    marginLeft: cssVar(cssContentMargin),
                },
                [RADIO_BUTTON_POSITION.right]: {
                    marginRight: cssVar(cssContentMargin),
                },
            }),

            paramsToCss(size)({
                small: typography.Text.M.Regular,
                medium: typography.Text.L.Regular,
                large: typography.Text.XL.Regular,
            }),
        ],
    });
});

export type RadioButtonStyleKeys = KeysFromUseStyles<typeof useStyles>

export * from './types';
export * from './vars';
