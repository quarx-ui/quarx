import { CreateThemeArg, Theme } from './types';
import { createBreakpoints } from '../breakpoints';
import { createElevations } from '../elevations';
import { createPalette } from '../palette';
import { createTransitions } from '../transitions';
import { createBorders } from '../borders';
import { createBorderRadii } from '../borderRadii';

export function createTheme({
    palette,
    breakpoints,
    transitions,
    defaultProps,
    elevations,
    borders,
    borderRadii,
}: CreateThemeArg = {}): Theme {
    return {
        palette: createPalette(palette),
        breakpoints: createBreakpoints(breakpoints),
        transitions: createTransitions(transitions),
        elevations: createElevations(elevations, palette),
        borders: createBorders(borders, palette),
        borderRadii: createBorderRadii(borderRadii),
        defaultProps,
    };
}
