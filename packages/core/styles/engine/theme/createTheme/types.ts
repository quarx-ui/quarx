import {
    BackdropProps,
    BadgeProps,
    BaseButtonProps,
    Breakpoints,
    ButtonProps,
    CheckboxProps,
    CheckboxSelectionProps,
    ChipsProps,
    CounterProps,
    CreateBreakpointsArg,
    CreateElevationArg,
    CreatePaletteArg,
    CreateTransitionArg,
    DeepPartial,
    OverScreenProps,
    Elevations,
    FooterBlockProps,
    HeaderBlockProps,
    IconButtonProps,
    LinkProps,
    LoaderProps,
    ModalProps,
    Palette,
    RadioButtonProps,
    RadioButtonSelectionProps,
    SelectionProps,
    SidePageProps,
    SwitcherProps,
    SwitcherSelectionProps,
    TabItemContainedProps,
    TabItemDefaultProps,
    TabItemSegmentedProps,
    TabsContainedProps,
    TabsContainerProps,
    TabsDefaultProps,
    TabsProps,
    TabsSegmentedProps,
    TextFieldProps,
    Transitions,
} from '@core';
import { CreateBorderArg, ReturnedBorders } from '@core/styles/engine/theme/borders';
import { ReturnedBorderRadii, CreateBorderRadiusArg } from '@core/styles/engine/theme/borderRadii';

export type DeepPartialWithStyles<Props extends Record<string, any>> = {
    [Property in keyof Props]?: DeepPartial<Omit<Props[Property], 'styles'>> & Pick<Props[Property], 'styles'>;
};

/* Автогенерация! Не трогать. */
export interface ComponentsProps {
    Backdrop: BackdropProps;
    Badge: BadgeProps;
    BaseButton: BaseButtonProps;
    Button: ButtonProps;
    Checkbox: CheckboxProps;
    CheckboxSelection: CheckboxSelectionProps;
    Chips: ChipsProps;
    Counter: CounterProps;
    Dialog: SidePageProps;
    OverScreen: OverScreenProps;
    FooterBlock: FooterBlockProps;
    HeaderBlock: HeaderBlockProps;
    IconButton: IconButtonProps;
    Link: LinkProps;
    Loader: LoaderProps;
    Modal: ModalProps;
    RadioButton: RadioButtonProps;
    RadioButtonSelection: RadioButtonSelectionProps;
    Selection: SelectionProps;
    SidePage: SidePageProps;
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
