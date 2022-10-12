import React, { useState } from 'react';
import {
    DATE_PICKER_TIME_TYPES,
    DatePicker as DatePickerKit,
    DatePickerProps,
    PeriodTypeDates,
    PickerTypeDates,
} from '@kit';
import { fr } from 'date-fns/locale';

export const DatePicker = (props: DatePickerProps) => {
    const [pickedDate, setPickDate] = useState<PickerTypeDates | undefined>();
    return (
        <DatePickerKit
            {...props}
            pickedDates={pickedDate}
            onChange={setPickDate}
            type={DATE_PICKER_TIME_TYPES.PICKER}
            initialViewingDate={new Date('2022-09-07')}
        />
    );
};

export const DatePickerPeriod = (props: DatePickerProps) => {
    const [periodDates, setPeriodDates] = useState<PeriodTypeDates | undefined>();
    return (
        <DatePickerKit
            {...props}
            pickedDates={periodDates}
            onChange={setPeriodDates}
            type={DATE_PICKER_TIME_TYPES.PERIOD}
            initialViewingDate={new Date('2022-09-07')}
        />
    );
};

export const DatePickerAllowedDates = (props: DatePickerProps) => {
    const [pickedDate, setPickDate] = useState<PickerTypeDates | undefined>();
    return (
        <DatePickerKit
            {...props}
            pickedDates={pickedDate}
            onChange={setPickDate}
            type={DATE_PICKER_TIME_TYPES.PICKER}
            initialViewingDate={new Date('2022-09-07')}
            allowedDates={{
                start: new Date('2022-09-03'),
                end: new Date('2022-09-16'),
            }}
        />
    );
};

export const FrenchDatePicker = (props: DatePickerProps) => {
    const [pickedDate, setPickDate] = useState<PickerTypeDates | undefined>();
    return (
        <DatePickerKit
            {...props}
            pickedDates={pickedDate}
            onChange={setPickDate}
            type={DATE_PICKER_TIME_TYPES.PICKER}
            initialViewingDate={new Date('2022-09-07')}
            locale={fr}
            texts={{
                startTime: 'Début',
                endTime: 'Fin',
                time: 'Temps',
            }}
        />
    );
};
