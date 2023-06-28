import { DatePickerProps, PeriodSelectedDates, PickerSelectedDate, SelectedDates } from '@core';
import { Dispatch, SetStateAction } from 'react';
import { ErrorsFromInput } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/types';
import { getDate } from './common';

type SetViewingDateType<D extends SelectedDates> = Dispatch<SetStateAction<DatePickerProps<D>['viewingDate']>>;

export type MapValueToTypeSelected<D extends SelectedDates> = Omit<MapTextFieldValueToSelectedProps<D>, 'isPickerType'>

const mapValueToPickerSelected = ({
    value,
    withTime,
    setViewingDate,
    setErrorText,
    errorsFromInput,
}: MapValueToTypeSelected<PickerSelectedDate>): PickerSelectedDate => {
    if (value && !value.includes('_')) {
        const newDate = getDate<PickerSelectedDate>(
            value, withTime, setErrorText, errorsFromInput.errorByValidateSelectedPickerDate,
        );
        setViewingDate(newDate);
        return newDate;
    }
    return undefined;
};

const mapValueToPeriodSelected = (
    { value, withTime, setViewingDate, setErrorText, errorsFromInput }: MapValueToTypeSelected<PeriodSelectedDates>,
): PeriodSelectedDates => {
    const [start, end] = value.split(' - ').map((dateValue, index) => getDate(dateValue, withTime, setErrorText,
        index === 0 ? errorsFromInput.errorByValidateFirstDate : errorsFromInput.errorByValidateLastDate));
    if (start && end) {
        setViewingDate(end);
        return {
            start,
            end,
        };
    } if (start) {
        setViewingDate(start);
        return {
            start,
        };
    }
    return {};
};

export interface MapTextFieldValueToSelectedProps<D extends SelectedDates> extends Pick<DatePickerProps<D>, 'withTime'>{
    value: string;
    isPickerType: boolean;
    setViewingDate: SetViewingDateType<D>;
    setErrorText: Dispatch<SetStateAction<string | undefined>>;
    errorsFromInput: Required<ErrorsFromInput>;
}

export const mapTextFieldValueToSelected = <D extends SelectedDates>(
    { isPickerType, ...props }: MapTextFieldValueToSelectedProps<D>,
): D => (isPickerType ? mapValueToPickerSelected(props) as D
    : mapValueToPeriodSelected(props) as D);
