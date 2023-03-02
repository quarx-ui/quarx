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
    size?: DatePickerSize,
    isLarge?: boolean,
    borderRadius?: DatePickerBorderRadius,
    useIncreasedScopeDay?: boolean,
    countWeeksInMonth?: number
}

export interface DatePickerAllowedDates {
    start?: Date,
    end?: Date,
}

export interface DatePickerTEXTS {
    placeholder?: string,
    errorText?: string,
    weekdays?: string[],
    monthNames?: string[],
    label?: string | ReactNode,
    time?: string,
    startTime?: string,
    endTime?: string,
    errorValidateTime?: string
}

export interface PickerTypeDates {
    selectedDate?: Date,
}

export interface PeriodTypeDates {
    startDate?: Date,
    endDate?: Date,
}

export type PickedDatesDatePicker = PickerTypeDates | PeriodTypeDates

export interface CommonDatePickerStyles {
    dropdown: StylesMap<DropdownDatePickerStyleKeys>,
    dropdownHeaderButton: StylesMap<DropdownButtonStyleKeys>,
    footer: StylesMap<FooterDatePickerStyleKeys>,
    header: StylesMap<HeaderDatePickerStyleKeys>,
    monthBlock: StylesMap<MonthBlockStyleKeys>,
    offsetDay: StylesMap<OffsetDayStyleKeys>,
    day: StylesMap<DayStyleKeys>,
}

export interface DatePickerPropsGeneric<T, D> extends Omit<DatePickerStyleParams, 'countWeeksInMonth' | 'isLarge'>,
    WithClassesAndStyles<DatePickerStyleKeys, DatePickerStyleParams> {
    onChange: (value?: D) => void,
    type: T,
    pickedDates?: D,
    allowedDates?: DatePickerAllowedDates,
    initialViewingDate?: Date,
    withTime?: boolean,
    yearsArr?: number[],
    popperZIndex?: number,
    texts?: DatePickerTEXTS,
    locale?: Locale,
    innerStyles?: CommonDatePickerStyles,
    display?: DatePickerDisplayTypes,
    disableYearChange?: boolean,
    permissions?: {
        disabled?: boolean,
        hidden?: boolean,
    }
}
export interface DatePickerInnerComponentsProps extends Omit<DatePickerProps, 'listOfYears' | 'permissions'
| 'locale' | 'className' | 'classes' | 'isOpen' | 'onChange' | 'changeableDates' | 'css' | 'pickedDates'
> {
    viewingDate: Date,
    styles: Exclude<DatePickerProps['styles'], undefined>
    onChange?: (dates?: PickedDatesDatePicker) => void
    dates?: PickedDatesDatePicker,
    isLarge: boolean
    setViewingDate: Dispatch<SetStateAction<Date>>
}

export type DatePickerProps = (
    DatePickerPropsGeneric<'PERIOD', PeriodTypeDates>
    | DatePickerPropsGeneric<'PICKER', PickerTypeDates>
)

export interface InnerTimeValues {
    pickedTime: string,
    startTime: string,
    endTime: string
}

export interface InnerTimeSetters {
    setPickedTime: Dispatch<SetStateAction<string>>,
    setStartTime: Dispatch<SetStateAction<string>>,
    setEndTime: Dispatch<SetStateAction<string>>,
}
