import {
    AvatarProps,
    CounterProps,
    DeepPartial,
    BadgeProps,
    BaseButtonProps,
    ButtonProps,
    IconButtonProps,
    LoaderProps,
    CheckboxProps,
    SwitcherProps,
    RadioButtonProps,
    SelectionProps,
    CheckboxSelectionProps,
    RadioButtonSelectionProps,
    SwitcherSelectionProps,
    Elevations,
    Palette,
    CreatePaletteArg,
    CreateBreakpointsArg,
    CreateElevationArg,
    Breakpoints,
    Transitions,
    CreateTransitionArg,
    LinkProps,
    TextFieldProps,
} from '@core';
import { CreateBorderArg, ReturnedBorders } from '@core/styles/engine/theme/borders';
import {
    ReturnedBorderRadii,
    CreateBorderRadiusArg
} from '@core/styles/engine/theme/borderRadii';

export type DeepPartialWithStyles<Props extends Record<string, any>> = {
    [Property in keyof Props]?: DeepPartial<Omit<Props[Property], 'styles'>> & Pick<Props[Property], 'styles'>
}

export interface ComponentsProps {
    Avatar: AvatarProps,
    Badge: BadgeProps,
    Button: ButtonProps,
    BaseButton: BaseButtonProps,
    IconButton: IconButtonProps,
    Checkbox: CheckboxProps,
    CheckboxSelection: CheckboxSelectionProps,
    Counter: CounterProps,
    Link: LinkProps,
    Loader: LoaderProps,
    RadioButton: RadioButtonProps,
    RadioButtonSelection: RadioButtonSelectionProps,
    Selection: SelectionProps,
    Switcher: SwitcherProps,
    SwitcherSelection: SwitcherSelectionProps,
    TextField: TextFieldProps,
}

export type DefaultProps = DeepPartialWithStyles<ComponentsProps>

export type Theme = {
    palette: Palette,
    breakpoints: Breakpoints,
    transitions: Transitions,
    elevations: Elevations,
    borders: ReturnedBorders,
    borderRadii: ReturnedBorderRadii,
    defaultProps?: DefaultProps
}

export interface CreateThemeArg {
    palette?: CreatePaletteArg,
    breakpoints?: CreateBreakpointsArg,
    transitions?: CreateTransitionArg,
    elevations?: CreateElevationArg,
    borders?: CreateBorderArg,
    borderRadii?: CreateBorderRadiusArg,
    defaultProps?: DefaultProps
}
