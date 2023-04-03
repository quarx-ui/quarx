import { DatePickerProps, PickerSelectedDate, PopupProps, SelectedDatesDatePicker } from '@core';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

export interface PopupDatePickerProps<D extends SelectedDatesDatePicker = PickerSelectedDate> extends DatePickerProps<D>, Pick<PopupProps, 'onClickAway' | 'anchor' |'open'> {
    popupProps?: PopupComponentDatePickerProps;
}

// export interface PickerType extends CommonPopupDatePickerProps {
//     type: 'PICKER';
//     selected?: Date;
//     onChange: (date: Date) => void;
// }
//
// export interface PeriodType extends CommonPopupDatePickerProps {
//     type: 'PERIOD';
//     selected?: PeriodSelectedDates;
//     onChange: (date: PeriodSelectedDates) => void;
// }
//
// export type PopupDatePickerProps = PickerType | PeriodType
