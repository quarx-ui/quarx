import {
    DatePickerProps,
    PickerSelectedDate,
    PopupProps,
    SelectedDatesDatePicker,
} from '@core';
import { CSSProperties } from 'react';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

export interface PopupDatePickerProps<D extends SelectedDatesDatePicker = PickerSelectedDate> extends
    DatePickerProps<D>,
    Pick<PopupProps, 'onClickAway' | 'anchor' |'open'>
{
    zIndex?: PopupDatePickerStyleParams['zIndex'];
    popupProps?: PopupComponentDatePickerProps;
}

export type PopupDatePickerStyleParams = Partial<Pick<CSSProperties, 'zIndex'>>
