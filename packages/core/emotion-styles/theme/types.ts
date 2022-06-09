import { ReactNode } from 'react';
import {
    CounterProps,
    DeepPartial,
    BadgeProps,
    BaseButtonProps,
    ButtonProps,
    IconButtonProps,
    LoaderProps,
    CheckboxProps,
    SwitcherProps,
    RadioButtonProps, SelectionProps,
    CheckboxSelectionProps,
    RadioButtonSelectionProps, SwitcherSelectionProps,
} from '@core';
import { CreateTransitionArg, Transitions } from './transitions';
import { CreatePaletteArg, Palette } from './palette';
import { Breakpoints, CreateBreakpointsArg } from './breakpoints';

export interface ComponentsProps {
    Counter: CounterProps
    Badge: BadgeProps,
    BaseButton: BaseButtonProps,
    Button: ButtonProps,
    IconButton: IconButtonProps,
    Loader: LoaderProps,
    Checkbox: CheckboxProps,
    Switcher: SwitcherProps,
    RadioButton: RadioButtonProps,
    Selection: SelectionProps,
    CheckboxSelection: CheckboxSelectionProps,
    RadioButtonSelection: RadioButtonSelectionProps,
    SwitcherSelection: SwitcherSelectionProps,
}

export type DefaultProps = DeepPartial<ComponentsProps>

export type Theme = {
    palette: Palette,
    breakpoints: Breakpoints,
    transitions: Transitions,
    defaultProps?: DefaultProps
}

export interface CreateThemeArg {
    palette?: CreatePaletteArg,
    breakpoints?: CreateBreakpointsArg,
    transitions?: CreateTransitionArg,
    defaultProps?: DefaultProps
}

export type ThemeRewriter = (theme: Theme) => Theme;

export interface ThemeProviderProps {
    theme: Theme | ThemeRewriter,
    children: ReactNode
}

export type { Palette, Breakpoints, Transitions };
