import {
    AccordionProps,
    BackdropProps,
    BadgeProps,
    BaseButtonProps,
    Breakpoints,
    ButtonProps,
    CheckboxProps,
    ChipsProps,
    CollapseProps,
    CounterProps,
    CreateBreakpointsArg,
    CreateElevationArg,
    CreatePaletteArg,
    CreateTransitionArg,
    CustomTheme,
    DeepPartial,
    DividerProps,
    DropdownItemProps,
    DropdownItemsGroupProps,
    DropdownProps,
    Elevations,
    FooterBlockProps,
    HeaderBlockProps,
    IconButtonProps,
    LinkProps,
    LoaderProps,
    ModalProps,
    OverScreenProps,
    Palette,
    PopupProps,
    RadioButtonProps,
    SelectionGroupProps,
    SelectionListProps,
    SelectionProps,
    SelectionTreeProps,
    SidePageProps,
    StackProps,
    SwitcherProps,
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
import { SelectionTreeNodeProps } from '@core/src/main/Selections/SelectionRegistries/SelectionTree/SelectionTreeNode';
import { CreateTypographyArg, Typography } from '../typography';

export type DeepPartialWithStyles<Props extends Record<string, any>> = {
    [Property in keyof Props]?: DeepPartial<Omit<Props[Property], 'styles'>> & Pick<Props[Property], 'styles'>;
};

/* Автогенерация! Не трогать. */
export interface ComponentsProps {
    Accordion: AccordionProps;
    Backdrop: BackdropProps;
    Badge: BadgeProps;
    BaseButton: BaseButtonProps;
    Button: ButtonProps;
    Checkbox: CheckboxProps;
    Chips: ChipsProps;
    Collapse: CollapseProps;
    Counter: CounterProps;
    Dialog: SidePageProps;
    Divider: DividerProps;
    Dropdown: DropdownProps;
    DropdownItem: DropdownItemProps;
    DropdownItemsGroup: DropdownItemsGroupProps;
    FooterBlock: FooterBlockProps;
    HeaderBlock: HeaderBlockProps;
    IconButton: IconButtonProps;
    Link: LinkProps;
    Loader: LoaderProps;
    Modal: ModalProps;
    OverScreen: OverScreenProps;
    Popup: PopupProps;
    RadioButton: RadioButtonProps;
    Selection: SelectionProps;
    SelectionGroup: SelectionGroupProps;
    SelectionList: SelectionListProps;
    SelectionTree: SelectionTreeProps;
    SelectionTreeNode: SelectionTreeNodeProps;
    SidePage: SidePageProps;
    Stack: StackProps;
    Switcher: SwitcherProps;
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

export type DefaultStyles = { [key in keyof ComponentsProps]?: ComponentsProps[key]['styles'] }

export interface Theme extends CustomTheme {
    palette: Palette;
    breakpoints: Breakpoints;
    transitions: Transitions;
    elevations: Elevations;
    borders: ReturnedBorders;
    borderRadii: ReturnedBorderRadii;
    typography: Typography;
    defaultProps?: DefaultProps;
    defaultStyles?: DefaultStyles;
}

export interface CreateThemeArg extends CustomTheme {
    palette?: CreatePaletteArg;
    breakpoints?: CreateBreakpointsArg;
    transitions?: CreateTransitionArg;
    elevations?: CreateElevationArg;
    borders?: CreateBorderArg;
    borderRadii?: CreateBorderRadiusArg;
    typography?: CreateTypographyArg;
    defaultProps?: DefaultProps;
    defaultStyles?: DefaultStyles;
}
