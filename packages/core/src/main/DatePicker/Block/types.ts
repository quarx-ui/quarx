import {
    QxBorderSize,
    PickQxSize,
    StylesMap,
    Values,
    valuesAsKeysFromArray,
    WithClassesAndStyles,
} from '@core';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Locale } from 'date-fns';
import { DatePickerStyleKeys, DayStyleKeys, FooterDatePickerStyleKeys, MonthBlockStyleKeys, HeaderDatePickerStyleKeys,
    OffsetDayStyleKeys, DropdownDatePickerStyleKeys, DropdownButtonStyleKeys } from '.';

export const DATE_PICKER_TIME_TYPES = valuesAsKeysFromArray(['PERIOD', 'PICKER'] as const);
export type DatePickerTimeTypes = Values<typeof DATE_PICKER_TIME_TYPES>

export const DATE_PICKER_DISPLAY_TYPES = valuesAsKeysFromArray(['SINGLE', 'DOUBLE'] as const);
export type DatePickerDisplayTypes = Values<typeof DATE_PICKER_DISPLAY_TYPES>

export type DatePickerBorderRadius = QxBorderSize;

export type DatePickerSize = PickQxSize<'small' | 'medium' | 'large'>

export interface DatePickerStyleParams {
    size?: DatePickerSize;
    isLarge?: boolean;
    borderRadius?: DatePickerBorderRadius;
    useIncreasedScopeDay?: boolean;
    countWeeksInMonth?: number;
}

export interface DatePickerAllowedDates {
    start?: Date;
    end?: Date;
}

export interface DatePickerTEXTS {
    placeholder?: string;
    errorText?: string;
    weekdays?: string[];
    monthNames?: string[];
    label?: string | ReactNode;
    time?: string;
    startTime?: string;
    endTime?: string;
    errorValidateTime?: string;
}

export type PickerSelectedDate = Date | undefined;

export interface PeriodSelectedDates {
    start?: Date;
    end?: Date;
}

export type SelectedDatesDatePicker = PeriodSelectedDates | PickerSelectedDate;

export interface CommonDatePickerStyles {
    dropdown: StylesMap<DropdownDatePickerStyleKeys>;
    dropdownHeaderButton: StylesMap<DropdownButtonStyleKeys>;
    footer: StylesMap<FooterDatePickerStyleKeys>;
    header: StylesMap<HeaderDatePickerStyleKeys>;
    monthBlock: StylesMap<MonthBlockStyleKeys>;
    offsetDay: StylesMap<OffsetDayStyleKeys>;
    day: StylesMap<DayStyleKeys>;
}

export interface CommonDatePickerProps extends Omit<DatePickerStyleParams, 'countWeeksInMonth' | 'isLarge'>,
    WithClassesAndStyles<DatePickerStyleKeys, DatePickerStyleParams> {
    allowedDates?: DatePickerAllowedDates;
    viewingDate?: Date;
    withTime?: boolean;
    yearsArr?: number[];
    texts?: DatePickerTEXTS;
    locale?: Locale;
    innerStyles?: CommonDatePickerStyles;
    display?: DatePickerDisplayTypes;
    disableYearChange?: boolean;
    permissions?: {
        disabled?: boolean;
        hidden?: boolean;
    };
}

export function isPicker(dates: SelectedDatesDatePicker): dates is PickerSelectedDate {
    return typeof dates === 'undefined' || Object.prototype.toString.call(dates) === '[object Date]';
}

export function isPeriod(dates: SelectedDatesDatePicker): dates is PeriodSelectedDates {
    return !isPicker(dates);
}

export function isPickerOnChange(dates: SelectedDatesDatePicker): dates is PeriodSelectedDates {
    return !isPicker(dates);
}
export interface DatePickerProps<D extends SelectedDatesDatePicker = PickerSelectedDate> extends CommonDatePickerProps {
    selected: D;
    onChange: (dates: D) => void;
}

export interface DatePickerInnerComponentsProps<D extends SelectedDatesDatePicker> extends Omit<DatePickerProps<D>, 'listOfYears' | 'permissions'
| 'locale' | 'className' | 'classes' | 'isOpen' | 'changeableDates' | 'css' | 'pickedDates' | 'onChange'
> {
    onChange: (newDates: SelectedDatesDatePicker) => void;
    viewingDate: Date;
    styles: Exclude<DatePickerProps<D>['styles'], undefined>;
    isLarge: boolean;
    setViewingDate: Dispatch<SetStateAction<Date>>;
}

export interface InnerTimeValues {
    pickedTime: string;
    startTime: string;
    endTime: string;
}

export interface InnerTimeSetters {
    setPickedTime: Dispatch<SetStateAction<string>>;
    setStartTime: Dispatch<SetStateAction<string>>;
    setEndTime: Dispatch<SetStateAction<string>>;
}
