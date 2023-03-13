import { DatePicker, forwardRef, TextField } from '@core';

export const TextFieldDatePicker = forwardRef(() => {
    console.log(1);
    return (
        <div>
            <TextField />
            <DatePicker onChange={} type={} />
        </div>
    );
});
