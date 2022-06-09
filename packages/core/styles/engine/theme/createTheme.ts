import { CreateThemeArg, Theme } from './types';
import { createPalette } from './palette';
import { createBreakpoints } from './breakpoints';

export function createTheme({ palette, breakpoints }: CreateThemeArg = {}): Theme {
    return ({
        palette: createPalette(palette),
        breakpoints: createBreakpoints(breakpoints),
    });
}
