import { CreateThemeArg, Theme } from './types';
import { createBreakpoints } from '../breakpoints';
import { createElevations } from '../elevations';
import { createPalette } from '../palette';
import { createTransitions } from '../transitions';
import { createBorders } from '../borders';
import { createBorderRadii } from '../borderRadii';
import { createTypography } from '../typography';

export function createTheme({
    palette: initialPalette,
    breakpoints,
    transitions,
    defaultProps,
    elevations,
    borders,
    borderRadii,
    typography,
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
        typography: createTypography(typography),
        defaultProps,
        defaultStyles,
    };
}
