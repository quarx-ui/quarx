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
    TabsProps,
    TabsContainerProps,
    TabsContainedProps,
    TabItemContainedProps,
    TabsDefaultProps,
    TabItemDefaultProps,
    TabsSegmentedProps,
    TabItemSegmentedProps,
    ModalProps,
    ModalHeaderProps,
    ModalFooterProps,
    BackdropProps,
} from '@core';
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
    TabItemContained: TabItemContainedProps;
    TabItemDefault: TabItemDefaultProps;
    TabItemSegmented: TabItemSegmentedProps;
    Tabs: TabsProps;
    TabsContained: TabsContainedProps;
    TabsContainer: TabsContainerProps;
    TabsDefault: TabsDefaultProps;
    TabsSegmented: TabsSegmentedProps;
    TextField: TextFieldProps;
    Modal: ModalProps,
    ModalHeader: ModalHeaderProps,
    ModalFooter: ModalFooterProps,
    Backdrop: BackdropProps,
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
