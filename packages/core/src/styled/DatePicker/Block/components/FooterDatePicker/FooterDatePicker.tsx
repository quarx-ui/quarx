/** @jsx jsx */
/** @jsxFrag */
import { jsx } from '@emotion/react';
import React, { ForwardedRef, forwardRef, useState } from 'react';
import InputMask from 'react-input-mask';
import { TextField, TextFieldProps, usePropsOverwrites } from '@core';
import { DATE_PICKER_TIME_TYPES } from '../..';
import { createError, isCompletedTime, isValidTimeValue, mapTimesToDates,
    TIME_INPUT_TYPE, TimeInputType } from './utils';
import { FooterDatePickerProps } from './types';
import { useStyles } from './styles';

export const FooterDatePicker = forwardRef((
    initialProps : FooterDatePickerProps, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn } = usePropsOverwrites('HeaderDatePicker', initialProps);
    const { innerStyles, styles: externalStyles, type, setDates, dates, startTimeText,
        endTimeText, selectedTimeLabel, size, times, setTimes, errorValidateTime, borderRadius,
    } = props;
    const params = { size, borderRadius };
    const styles = useStyles({ ...params, styles: { ...innerStyles?.footer, ...externalStyles } });
    const commonPeriodProps = {
        borderRadius,
        size,
        css: styles.periodTimeTextField,
        className: cn('periodTimeTextField', params),
        styles: {
            label: styles.labelTimeTextField,
        },
    };
    const { setPickedTime, setStartTime, setEndTime } = setTimes;
    const { pickedTime, startTime, endTime } = times;
    const [errorMessagePicker, setErrorMessagePicker] = useState<string | undefined>(undefined);
    const [errorMessageStart, setErrorMessageStart] = useState<string | undefined>(undefined);
    const [errorMessageEnd, setErrorMessageEnd] = useState<string | undefined>(undefined);
    const errorMessageSetters = {
        setErrorMessagePicker, setErrorMessageStart, setErrorMessageEnd,
    };
    const onTimeChange = (value: string, inputType: TimeInputType) => {
        if (isCompletedTime(value) && !isValidTimeValue(value)) {
            createError(errorMessageSetters, inputType, errorValidateTime);
        } else if (isCompletedTime(value)) {
            createError(errorMessageSetters, inputType, undefined);
            setDates?.(mapTimesToDates(value, dates, type, inputType, errorMessageSetters, errorValidateTime));
        } else {
            createError(errorMessageSetters, inputType, undefined);
        }
    };
    return (
        <div css={styles.footer} ref={ref} className={cn('footer', params)}>
            {type === DATE_PICKER_TIME_TYPES.PICKER ? (
                <InputMask
                    mask="99:99:99"
                    onChange={(e) => {
                        setPickedTime(e.currentTarget.value);
                        onTimeChange(e.currentTarget.value, TIME_INPUT_TYPE.PICK);
                    }}
                    value={pickedTime}
                >
                    {(inputProp: TextFieldProps) => (
                        <TextField
                            {...inputProp}
                            css={styles.selectedTime}
                            className={cn('selectedTime', params)}
                            label={selectedTimeLabel}
                            borderRadius={borderRadius}
                            styles={{
                                label: styles.labelTimeTextField,
                            }}
                            size={size}
                            errorText={errorMessagePicker}
                            onClear={() => {
                                setPickedTime('');
                            }}
                        />
                    )}
                </InputMask>
            ) : (
                <div css={styles.timeTextFieldContainer} className={cn('timeTextFieldContainer', params)}>
                    <InputMask
                        mask="99:99:99"
                        onChange={(e) => {
                            setStartTime(e.currentTarget.value);
                            onTimeChange(e.currentTarget.value, TIME_INPUT_TYPE.START);
                        }}
                        value={startTime}
                    >
                        {(inputProp: TextFieldProps) => (
                            <TextField
                                {...inputProp}
                                {...commonPeriodProps}
                                label={startTimeText}
                                errorText={errorMessageStart}
                                onClear={() => { setStartTime(''); }}
                            />
                        )}
                    </InputMask>
                    <InputMask
                        mask="99:99:99"
                        onChange={(e) => {
                            setEndTime(e.currentTarget.value);
                            onTimeChange(e.currentTarget.value, TIME_INPUT_TYPE.END);
                        }}
                        value={endTime}
                    >
                        {(inputProp: TextFieldProps) => (
                            <TextField
                                {...inputProp}
                                {...commonPeriodProps}
                                label={endTimeText}
                                errorText={errorMessageEnd}
                                onClear={() => { setEndTime(''); }}
                            />
                        )}
                    </InputMask>
                </div>
            )}
        </div>
    );
});
