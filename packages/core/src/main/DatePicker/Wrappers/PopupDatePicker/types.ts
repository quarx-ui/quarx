import {
    DatePickerProps,
    PickerSelectedDate,
    PopupProps,
    SelectedDates,
} from '@core';
import { CSSProperties } from 'react';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

export interface PopupDatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    DatePickerProps<D>,
    Pick<PopupProps, 'onClickAway' | 'anchor' |'open'>
{
    /** zIndex Popper компонента */
    zIndex?: PopupDatePickerStyleParams['zIndex'];

    /** Props Popup компонента */
    popupProps?: PopupComponentDatePickerProps;
}

export type PopupDatePickerStyleParams = Partial<Pick<CSSProperties, 'zIndex'>>
