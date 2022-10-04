import {
    attenuateColor,
    changeOpacity,
    createLightGradient,
    getContrastColor,
    getDarkSuperposition,
    getLightSuperposition,
} from '../../utils';
import {
    Palette,
    PaletteAlpha,
    PaletteColor,
    PaletteColors,
    PaletteColorValues,
    PaletteDecimal
} from './types';
import { createPoints } from './createPoints';

export const getComputedLightColors = (color: string, background: string): PaletteColorValues => ({
    default: color,
    contrastText: background,
    border: getLightSuperposition(color, 0.72),
    surface: getLightSuperposition(color, 0.92),
    bg: getLightSuperposition(color, 0.96),
    gradient: createLightGradient(color, background),
    press: getDarkSuperposition(color, 0.2),
    hover: getLightSuperposition(color, 0.24),

    stronger: createPoints<PaletteDecimal>((key) => attenuateColor(color, key), 10, -1),
    weaker: createPoints<PaletteDecimal>((key) => attenuateColor(color, key), 10),
    alpha: createPoints<PaletteAlpha>((key) => changeOpacity(color, key), 8, 0.01),
});

export const getLightSecondaryColors = (background = '#FFFFFF', text = '#02050A'): Omit<Palette, 'colors' | 'type'> => ({
    background: {
        main: background,
        secondary: getLightSuperposition(text, 0.96),
        textField: {
            main: getLightSuperposition(text, 0.92),
            secondary: background,
        },
        container: {
            hover: getLightSuperposition(text, 0.94),
        }
    },
    text: {
        main: text,
        secondary: getLightSuperposition(text, 0.48),
        tertiary: getLightSuperposition(text, 0.64),
        constant: background,
    },
    border: {
        main: getLightSuperposition(text, 0.92),
        secondary: getLightSuperposition(text, 0.84),
        focus: {
            light: changeOpacity(background, 0.56),
            dark: changeOpacity(text, 0.56),
        },
    },
    disabled: {
        main: getLightSuperposition(text, 0.64),
        secondary:  getLightSuperposition(text, 0.72),
        bg:  getLightSuperposition(text, 0.92),
        border:  getLightSuperposition(text, 0.88),
        contrast:  getLightSuperposition(text, 0.48),
    },
})

export const getLightPalette = (initialColors: Record<PaletteColor, string>, background = '#FFFFFF', text = '#02050A') => {
    const colors: Partial<PaletteColors> = Object
        .entries(initialColors)
        .reduce((acc, [key, value]) => ({
            ...acc,
            [key]: getComputedLightColors(value, background)
        }), {});

    return {
        ...getLightSecondaryColors(background, text),
        colors
    }
}
