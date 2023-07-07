import { render } from '@testing-library/react';
import React, { useState, forwardRef, ForwardedRef } from 'react';
import { expectRootCn } from '@core/test-utils';
import { DatePickerBlock, PickerSelectedDate } from '..';

const TestableDatePicker = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const [date, setDate] = useState<PickerSelectedDate | undefined>();
    return (
        <DatePickerBlock
            ref={ref}
            {...props}
            selected={date}
            viewingDate={new Date('2022-09-07')}
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
        expectRootCn(DatePickerBlock, 'QxDatePickerBlock');
    });
});
