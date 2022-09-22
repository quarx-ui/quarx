import { BadgeProps, BaseButtonProps, Breakpoints, ButtonProps, CheckboxProps, CheckboxSelectionProps, CounterProps, CreateBreakpointsArg, CreateElevationArg, CreatePaletteArg, CreateTransitionArg, DeepPartial, Elevations, IconButtonProps, LinkProps, LoaderProps, Palette, RadioButtonProps, RadioButtonSelectionProps, SelectionProps, SwitcherProps, SwitcherSelectionProps, TextFieldProps, Transitions } from '@core';
import { CreateBorderArg, ReturnedBorders } from '@core/styles/engine/theme/borders';
import { ReturnedBorderRadii, CreateBorderRadiusArg } from '@core/styles/engine/theme/borderRadii';

export type DeepPartialWithStyles<Props extends Record<string, any>> = {
    [Property in keyof Props]?: DeepPartial<Omit<Props[Property], 'styles'>> & Pick<Props[Property], 'styles'>;
};
export interface ComponentsProps {
    Badge: BadgeProps;
    BaseButton: BaseButtonProps;
    Button: ButtonProps;
    Checkbox: CheckboxProps;
    CheckboxSelection: CheckboxSelectionProps;
    Counter: CounterProps;
    IconButton: IconButtonProps;
    Link: LinkProps;
    Loader: LoaderProps;
    RadioButton: RadioButtonProps;
    RadioButtonSelection: RadioButtonSelectionProps;
    Selection: SelectionProps;
    Switcher: SwitcherProps;
    SwitcherSelection: SwitcherSelectionProps;
    TextField: TextFieldProps;
}
export type DefaultProps = DeepPartialWithStyles<ComponentsProps>;
export type Theme = {
    palette: Palette;
    breakpoints: Breakpoints;
    transitions: Transitions;
    elevations: Elevations;
    borders: ReturnedBorders;
    borderRadii: ReturnedBorderRadii;
    defaultProps?: DefaultProps;
};
export interface CreateThemeArg {
    palette?: CreatePaletteArg;
    breakpoints?: CreateBreakpointsArg;
    transitions?: CreateTransitionArg;
    elevations?: CreateElevationArg;
    borders?: CreateBorderArg;
    borderRadii?: CreateBorderRadiusArg;
    defaultProps?: DefaultProps;
}
