import {
    attenuateColor,
    changeOpacity, createDarkGradient,
    getDarkSuperposition,
    getLightSuperposition, getLightSuperpositionWithEqualAlpha,
    Palette, PaletteAlpha,
    PaletteColor,
    PaletteColors, PaletteColorValues, PaletteDecimal
} from '@core';
import { createPoints } from '@core/styles/engine/theme/palette/createPoints';

export const getComputedDarkColors = (color: string, text: string, background: string): PaletteColorValues => ({
    default: color,
    contrastText: text,
    border: getDarkSuperposition(color, 0.32),
    surface: getDarkSuperposition(color, 0.8),
    bg: getDarkSuperposition(color, 0.88),
    gradient: createDarkGradient(color, text, background),
    press: getDarkSuperposition(color, 0.2),
    hover: getLightSuperposition(color, 0.24),

    stronger: createPoints<PaletteDecimal>((key) => attenuateColor(color, key), 10, -1),
    weaker: createPoints<PaletteDecimal>((key) => attenuateColor(color, key), 10),
    alpha: createPoints<PaletteAlpha>(
        (key) => getLightSuperpositionWithEqualAlpha(color, key / 2),
        8,
        0.01
    ),
});

export const getDarkSecondaryColors = (background = '#02050A', text = '#FFFFFF'): Omit<Palette, 'colors' | 'type'> => ({
    background: {
        main: getLightSuperposition(background, 0.08),
        secondary: background,
        textField: {
            main: getLightSuperposition(background, 0.1),
            secondary: background,
        },
        container: {
            hover: getLightSuperposition(background, 0.12),
        }
    },
    text: {
        main: text,
        secondary: getLightSuperposition(background, 0.56),
        tertiary: getLightSuperposition(background, 0.4),
        constant: getLightSuperposition(background, 0.08),
    },
    border: {
        main: getLightSuperposition(background, 0.12),
        secondary: getLightSuperposition(background, 0.2),
        focus: {
            main: changeOpacity(text, 0.56),
            inverse: changeOpacity(background, 0.56),
        },
    },
    disabled: {
        main: getLightSuperposition(background, 0.4),
        secondary: getLightSuperposition(background, 0.32),
        bg: getLightSuperposition(background, 0.16),
        border: getLightSuperposition(background, 0.24),
        contrast: getLightSuperposition(background, 0.56),
    },
});

export const getDarkPalette = (initialColors: Record<PaletteColor, string>, background = '#02050A', text = '#FFFFFF') => {
    const colors: Partial<PaletteColors> = Object
        .entries(initialColors)
        .reduce((acc, [key, value]) => ({
            ...acc,
            [key]: getComputedDarkColors(value, text, background)
        }), {});

    return {
        ...getDarkSecondaryColors(background, text),
        colors
    }
}
