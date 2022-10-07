import { CSSObject } from '@emotion/react';
import { Transitions } from '@core/styles';

interface CssOnFocusOptions {
    transitions?: Transitions,
    focusWidth?: number | string,
    borderWidth?: number | string,
}

const withPx = (value?: string | number) => (
    typeof value === 'number'
        ? `${value}px`
        : value
) ?? 0;

export const baseFocusStyles = (
    options: CssOnFocusOptions = {},
    styles: CSSObject = {},
): CSSObject => {
    const {
        transitions,
        focusWidth: externalFocusWidth,
        borderWidth: externalBorderWidth,
    } = options;

    const focusWidth = withPx(externalFocusWidth);
    const borderWidth = withPx(externalBorderWidth);

    return ({
        position: 'relative',

        '&:after': {
            content: '""',
            position: 'absolute',
            borderRadius: 'inherit',

            ...transitions && {
                transition: transitions.create(['border-color'], {
                    duration: transitions.duration.shortest,
                }),
            },

            borderStyle: 'solid',
            borderColor: 'transparent',

            ...focusWidth && {
                borderWidth: focusWidth,
            },

            ...borderWidth && {
                top: `calc(-1 * ${borderWidth})`,
                bottom: `calc(-1 * ${borderWidth})`,
                left: `calc(-1 * ${borderWidth})`,
                right: `calc(-1 * ${borderWidth})`,
            },

            ...styles,
        },
    });
};

export const stylesWithFocus = (styles: CSSObject = {}):CSSObject => ({
    '&:after': styles,
});
