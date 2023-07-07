import {
    DatePickerBlockProps,
    PickerSelectedDate,
    SelectedDates,
} from '@core/src/experimental';
import { CSSProperties } from 'react';
import { PopupProps, WithClassesAndStyles } from '@core';
import { DatePickerStyleKeys } from './styles';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

type DatePickerPropsToPopup<D extends SelectedDates> = Omit<DatePickerBlockProps<D>, 'classes' | 'styles'>;

export interface DatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    DatePickerPropsToPopup<D>,
    Pick<PopupProps, 'onClickAway' | 'anchor' |'open'>,
    Partial<DatePickerStyleParams>,
    WithClassesAndStyles<DatePickerStyleKeys, DatePickerStyleParams>
{
    /** Props Popup компонента */
    popupProps?: PopupComponentDatePickerProps;
}

export interface DatePickerStyleParams {
    /** zIndex Popper компонента */
    zIndex: CSSProperties['zIndex'];
}
