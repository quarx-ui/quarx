import { CommonDatePickerProps, DatePickerProps, PeriodSelectedDates, PopupProps } from '@core';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

export type CommonPopupDatePickerProps = Pick<PopupProps, 'onClickAway' | 'anchor'> & {
    hidden?: boolean;
    // setHidden?: (hidden: boolean) => void;
    popupProps?: PopupComponentDatePickerProps;
    datePickerProps: DatePickerProps;
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
