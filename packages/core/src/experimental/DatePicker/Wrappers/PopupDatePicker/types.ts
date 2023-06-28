import {
    DatePickerProps,
    PickerSelectedDate,
    SelectedDates,
} from '@core/src/experimental';
import { CSSProperties } from 'react';
import { PopupProps, WithClassesAndStyles } from '@core';
import { PopupDatePickerStyleKeys } from './styles';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

export interface PopupDatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    Omit<DatePickerProps<D>, 'classes' | 'styles'>,
    Pick<PopupProps, 'onClickAway' | 'anchor' |'open'>,
    Partial<PopupDatePickerStyleParams>,
    WithClassesAndStyles<PopupDatePickerStyleKeys, PopupDatePickerStyleParams>
{
    /** Props Popup компонента */
    popupProps?: PopupComponentDatePickerProps;
}

export interface PopupDatePickerStyleParams {
    /** zIndex Popper компонента */
    zIndex: CSSProperties['zIndex'];
}
