import { Dispatch, SetStateAction } from 'react';
import { PickerSelectedDate, SelectedDates, WithClassesAndStyles } from '@core';
import {
    DatePickerInnerComponentsProps,
    DatePickerSize, InnerTimeValues, InnerTimeSetters, DatePickerStyleParams, FooterDatePickerStyleKeys,
} from '../..';

export type FooterStyleParams = Pick<DatePickerStyleParams, 'size'>

export interface FooterDatePickerProps<D extends SelectedDates = PickerSelectedDate> extends WithClassesAndStyles<FooterDatePickerStyleKeys, FooterStyleParams>,
    Pick<DatePickerInnerComponentsProps<D>, 'innerStyles' | 'borderRadius' | 'onChange'> {
    selected?: D;
    startTimeText: string;
    endTimeText: string;
    selectedTimeLabel: string;
    size: DatePickerSize;
    times: InnerTimeValues;
    setTimes: InnerTimeSetters;
    errorValidateTime: string;
}

export interface ErrorMessageSetters {
    setErrorMessagePicker: Dispatch<SetStateAction<string | undefined>>;
    setErrorMessageStart: Dispatch<SetStateAction<string | undefined>>;
    setErrorMessageEnd: Dispatch<SetStateAction<string | undefined>>;
}
