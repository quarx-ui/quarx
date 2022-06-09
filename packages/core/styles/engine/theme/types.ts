import { ReactNode } from 'react';
import { CreatePaletteArg, Palette } from './palette';
import { Breakpoints, CreateBreakpointsArg } from './breakpoints';

export type Theme = {
    palette: Palette,
    breakpoints: Breakpoints,
}

export interface CreateThemeArg {
    palette?: CreatePaletteArg,
    breakpoints?: CreateBreakpointsArg
}

export type ThemeRewriter = (theme: Theme) => Theme;

export interface ThemeProviderProps {
    theme: Theme | ThemeRewriter,
    children: ReactNode
}

export type { Palette, Breakpoints };
