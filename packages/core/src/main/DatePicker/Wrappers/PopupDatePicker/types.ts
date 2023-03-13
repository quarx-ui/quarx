import { DatePickerPropsGeneric, PeriodTypeDates, PickerTypeDates, PopupProps } from '@core';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

export interface PopupDatePickerPropsGeneric<T, A> extends DatePickerPropsGeneric<T, A>, Pick<PopupProps, 'onClickAway' | 'anchor'> {
    hidden?: boolean;
    // setHidden?: (hidden: boolean) => void;
    popupProps?: PopupComponentDatePickerProps;
}

export type PopupDatePickerProps = (
    PopupDatePickerPropsGeneric<'PERIOD', PeriodTypeDates>
    | PopupDatePickerPropsGeneric<'PICKER', PickerTypeDates>
)
