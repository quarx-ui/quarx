import {
    BackdropProps,
    BadgeProps,
    BaseButtonProps,
    Breakpoints,
    ButtonProps,
    CheckboxProps,
    ChipsProps,
    CounterProps,
    CreateBreakpointsArg,
    CreateElevationArg,
    CreatePaletteArg,
    CreateTransitionArg,
    DatePickerProps,
    DeepPartial,
    DividerProps,
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
import { DayBlockProps } from "@core/src/styled/DatePicker/Block/components/DayBlock/types";
import {
    DatePickerDropdownProps
} from "@core/src/styled/DatePicker/Block/components/Dropdown/types";
import { FooterDatePickerProps } from "@core/src/styled/DatePicker/Block/components/FooterDatePicker/types";
import { HeaderDatePickerProps } from "@core/src/styled/DatePicker/Block/components/HeaderDatePicker/types";
import { MonthBlockProps } from "@core/src/styled/DatePicker/Block/components/MonthBlock";
import { OffsetDayBlockProps } from "@core/src/styled/DatePicker/Block/components/OffsetDayBlock/types";
import { HeaderDatePickerDropdownProps } from "@core/src/styled/DatePicker/Block/components/Dropdown/HeaderButton/types";
import { SelectionTreeNodeProps } from '@core/src/main/Selections/SelectionRegistries/SelectionTree/SelectionTreeNode';

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
    Chips: ChipsProps;
    Counter: CounterProps;
    Dialog: SidePageProps;
    Divider: DividerProps;
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
    DatePicker: DatePickerProps;
    DayBlock: DayBlockProps;
    DatePickerDropdown: DatePickerDropdownProps;
    HeaderDropdownDatePicker: HeaderDatePickerDropdownProps;
    FooterDatePicker: FooterDatePickerProps;
    HeaderDatePicker: HeaderDatePickerProps;
    MonthBlock: MonthBlockProps;
    OffsetDayBlock: OffsetDayBlockProps;
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
