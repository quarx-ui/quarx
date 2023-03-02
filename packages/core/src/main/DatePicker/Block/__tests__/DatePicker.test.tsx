import { render } from '@testing-library/react';
import React, { useState, forwardRef, ForwardedRef } from 'react';
import { expectRootCn } from '@core/test-utils';
import { DatePicker, DATE_PICKER_TIME_TYPES, PickerTypeDates } from '..';

const TestableDatePicker = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const [date, setDate] = useState<PickerTypeDates | undefined>();
    return (
        <DatePicker
            ref={ref}
            {...props}
            pickedDates={date}
            type={DATE_PICKER_TIME_TYPES.PICKER}
            initialViewingDate={new Date('2022-09-07')}
            onChange={setDate}
            withTime
        />
    );
});

describe('DatePicker', () => {
    it('Snapshot', () => {
        const { asFragment } = render(<TestableDatePicker />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('className', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expectRootCn(DatePicker, 'QxDatePicker');
    });
});
