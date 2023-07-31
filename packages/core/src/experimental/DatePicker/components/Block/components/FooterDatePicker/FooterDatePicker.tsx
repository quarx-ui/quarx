import React, { ForwardedRef, useState } from 'react';
import InputMask from 'react-input-mask';
import { forwardRef, TextField, TextFieldProps, usePropsOverwrites } from '@core';
import { SelectedDates } from '@core/src/experimental';
import {
    createError,
    isCompletedTime,
    isValidTimeValue,
    mapTimesToPeriodSelected,
    mapTimesToPickerSelected,
    TIME_INPUT_TYPE,
    TimeInputType,
} from './utils';
import { FooterDatePickerProps } from './types';
import { useStyles } from './styles/index';
import { isPicker } from '../../types';

export const FooterDatePicker = forwardRef(<D extends SelectedDates>(
    initialProps : FooterDatePickerProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('FooterDatePicker', initialProps);
    const { innerStyles: externalStyles, onChange, selected, startTimeText, withSeconds,
        endTimeText, selectedTimeLabel, size, times, setTimes, errorValidateTime, borderRadius,
    } = props;
    const params = { size };
    const styles = useStyles({ params, ...styleProps, overwritesStyles: externalStyles?.footer });
    const commonPeriodProps = {
        borderRadius,
        size,
        css: styles.periodTimeTextField,
        className: cn('periodTimeTextField'),
        inputProps: {
            size: 8,
        },
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
        } else if (isCompletedTime(value) && onChange) {
            createError(errorMessageSetters, inputType, undefined);
            if (isPicker(selected)) {
                onChange(
                    mapTimesToPickerSelected(value, selected, inputType, errorMessageSetters, errorValidateTime) as D,
                );
            } else {
                onChange(
                    mapTimesToPeriodSelected(value, selected, inputType, errorMessageSetters, errorValidateTime) as D,
                );
            }
        } else {
            createError(errorMessageSetters, inputType, undefined);
        }
    };

    const inputMask = withSeconds ? '99:99:99' : '99:99';
    const getValueWithSecondsIfCompleted = (value: string) => !withSeconds && isCompletedTime(value) ? `${value}:00` : value;

    return (
        <div css={styles.root} ref={ref} className={cn('root', params)}>
            {isPicker(selected) ? (
                <InputMask
                    mask={inputMask}
                    onChange={(e) => {
                        const timeValue = getValueWithSecondsIfCompleted(e.currentTarget.value);
                        setPickedTime(timeValue);
                        onTimeChange(timeValue, TIME_INPUT_TYPE.PICK);
                    }}
                    value={pickedTime}
                >
                    {(inputProp: TextFieldProps) => (
                        <TextField
                            {...inputProp}
                            css={styles.selectedTime}
                            className={cn('selectedTime')}
                            label={selectedTimeLabel}
                            borderRadius={borderRadius}
                            styles={{
                                label: styles.labelTimeTextField,
                            }}
                            inputProps={{
                                size: 8,
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
                <div css={styles.timeTextFieldContainer} className={cn('timeTextFieldContainer')}>
                    <InputMask
                        mask={inputMask}
                        onChange={(e) => {
                            const timeValue = getValueWithSecondsIfCompleted(e.currentTarget.value);
                            setStartTime(timeValue);
                            onTimeChange(timeValue, TIME_INPUT_TYPE.START);
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
                        mask={inputMask}
                        onChange={(e) => {
                            const timeValue = getValueWithSecondsIfCompleted(e.currentTarget.value);
                            setEndTime(timeValue);
                            onTimeChange(timeValue, TIME_INPUT_TYPE.END);
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
