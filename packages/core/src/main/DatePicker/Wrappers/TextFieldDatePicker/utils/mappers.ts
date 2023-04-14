import { DatePickerProps, PeriodSelectedDates, PickerSelectedDate, SelectedDatesDatePicker } from '@core';
import { Dispatch, SetStateAction } from 'react';
import { getDate } from './common';

type SetViewingDateType<D extends SelectedDatesDatePicker> = Dispatch<SetStateAction<DatePickerProps<D>['viewingDate']>>;

const validateValue = (value: string, withTime: DatePickerProps['withTime']) => {
    const [startDateValue, endDateValue] = value.split(' - ');
    return {
        startDate: getDate(startDateValue, withTime),
        endDate: getDate(endDateValue, withTime),
    };
};

const mapValueToPickerSelected = <D extends SelectedDatesDatePicker>(value: string, withTime: DatePickerProps['withTime'], setViewingDate: SetViewingDateType<D>): PickerSelectedDate => {
    if (value && !value.includes('_')) {
        const newDate = getDate(value, withTime);
        setViewingDate(newDate);
        return newDate;
    }
    return undefined;
};

const mapValueToPeriodSelected = <D extends SelectedDatesDatePicker>(value: string, withTime: DatePickerProps['withTime'], setViewingDate: SetViewingDateType<D>): PeriodSelectedDates => {
    const [start, end] = value.split(' - ').map((dateValue) => getDate(dateValue, withTime));
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

export interface MapTextFieldValueToSelectedProps<D extends SelectedDatesDatePicker> extends Pick<DatePickerProps<D>, 'withTime'>{
    value: string;
    isPickerType: boolean;
    setViewingDate: SetViewingDateType<D>;
}

// todo надо будет повесить обработчик на соответствие allowedDates
export const mapTextFieldValueToSelected = <D extends SelectedDatesDatePicker>(
    { value, isPickerType, withTime, setViewingDate }: MapTextFieldValueToSelectedProps<D>,
): D => {
    if (isPickerType) {
        return mapValueToPickerSelected(value, withTime, setViewingDate) as D;
    }
    return mapValueToPeriodSelected(value, withTime, setViewingDate) as D;
};
