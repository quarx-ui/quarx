import { Dispatch, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import { PickerSelectedDate, SelectedDates } from '@core/src/experimental';
import { DatePickerSize, DatePickerStyleParams, FooterDatePickerStyleKeys } from '../..';
import { DatePickerInnerComponentsProps, InnerTimeValues, InnerTimeSetters } from '../../types';

export type FooterStyleParams = Pick<DatePickerStyleParams, 'size'>

export interface FooterDatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    WithClassesAndStyles<FooterDatePickerStyleKeys, FooterStyleParams>,
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
