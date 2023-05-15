import { CreateThemeArg, Theme } from './types';
import { createBreakpoints } from '../breakpoints';
import { createElevations } from '../elevations';
import { createPalette } from '../palette';
import { createTransitions } from '../transitions';
import { createBorders } from '../borders';
import { createBorderRadii } from '../borderRadii';

export function createTheme({
    palette: initialPalette,
    breakpoints,
    transitions,
    defaultProps,
    elevations,
    borders,
    borderRadii,
    defaultStyles,
}: CreateThemeArg = {}): Theme {
    const palette = createPalette(initialPalette);

    return {
        palette,
        breakpoints: createBreakpoints(breakpoints),
        transitions: createTransitions(transitions),
        elevations: createElevations(elevations, palette),
        borders: createBorders(borders, palette),
        borderRadii: createBorderRadii(borderRadii),
        defaultProps,
        defaultStyles,
    };
}
