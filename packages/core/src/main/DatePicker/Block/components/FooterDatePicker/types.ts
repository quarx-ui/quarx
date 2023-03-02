import { Dispatch, SetStateAction } from 'react';
import { WithClassesAndStyles } from '@core';
import {
    PickedDatesDatePicker,
    DatePickerProps,
    DatePickerInnerComponentsProps,
    DatePickerSize, InnerTimeValues, InnerTimeSetters, DatePickerStyleParams, FooterDatePickerStyleKeys,
} from '../..';

export type FooterStyleParams = DatePickerStyleParams

export interface FooterDatePickerProps extends WithClassesAndStyles<FooterDatePickerStyleKeys, FooterStyleParams>,
    Pick<DatePickerInnerComponentsProps, 'innerStyles' | 'borderRadius'>,
    Pick<DatePickerProps, 'type'> {
    dates?: PickedDatesDatePicker,
    setDates: DatePickerInnerComponentsProps['onChange'],
    startTimeText: string,
    endTimeText: string,
    selectedTimeLabel: string,
    size: DatePickerSize
    times: InnerTimeValues,
    setTimes: InnerTimeSetters,
    errorValidateTime: string
}

export interface ErrorMessageSetters {
    setErrorMessagePicker: Dispatch<SetStateAction<string | undefined>>,
    setErrorMessageStart: Dispatch<SetStateAction<string | undefined>>,
    setErrorMessageEnd: Dispatch<SetStateAction<string | undefined>>,
}
