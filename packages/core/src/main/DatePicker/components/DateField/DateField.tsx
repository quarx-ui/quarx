import { NumberFormatBase, usePatternFormat } from 'react-number-format';
import { ChangeEventHandler, Ref, useEffect, useState } from 'react';
import { forwardRef } from '@core/utils';
import { SelectedDates } from '@core/src';
import { isEqualValue, validateDateString } from './utils/validators';
import {
    mapSelectedToTextFieldValue,
    getFormatValue,
    getMask,
    getPlaceholder,
    mapTextFieldValueToSelected,
} from './utils';
import { DateInputProps } from './components/types';
import { DateInput } from './components/DateInput';
import { DateFieldProps, DateFieldTexts } from './types';
import { validateDateOnInput } from './utils/inputValidators';

export const DateField = forwardRef(<D extends SelectedDates>(initialProps: DateFieldProps<D>, ref: Ref<HTMLDivElement>) => {
    const { isSingleDate, withTime, useExperimentalDateFieldValidation = false,
        value: dateValueExternal, onChange: onChangeExternal, errorText, texts, ...restProps } = initialProps;

    const {
        errorByValidateFirstDate = 'Некорректная дата начала периода',
        errorByValidateLastDate = 'Некорректная дата конца периода',
        errorByValidationSingleDate = 'Некорректная дата',
    } = texts || {};

    const errorsFromInput: Required<DateFieldTexts> = {
        errorByValidateFirstDate,
        errorByValidateLastDate,
        errorByValidationSingleDate,
    };

    const [innerErrorText, setInnerErrorText] = useState(errorText);
    const [dateValue, setDateValue] = useState(dateValueExternal);
    const [value, setValue] = useState(mapSelectedToTextFieldValue(dateValue, withTime));

    const onChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value: newValue } }) => {
        const newDate = mapTextFieldValueToSelected({ value: newValue, isSingleDate, withTime, setErrorText: setInnerErrorText, errorsFromInput }) as D;
        setValue(newValue);
        if (validateDateString(newValue)) {
            setDateValue(newDate);
            onChangeExternal(newDate);
        }
    };

    useEffect(() => {
        if (!isEqualValue(dateValue, dateValueExternal)) {
            setDateValue(dateValueExternal);
            setValue(mapSelectedToTextFieldValue(dateValueExternal, withTime));
        }
    }, [dateValue, dateValueExternal, value, withTime]);

    const { format: nativeFormat, ...rest } = usePatternFormat<DateInputProps>({
        ...restProps,
        value,
        onChange,
        placeholder: getPlaceholder(isSingleDate, withTime),
        mask: getMask(isSingleDate, withTime),
        format: getFormatValue(isSingleDate, withTime),
        useExperimentalDateFieldValidation,
        customInput: DateInput,
        errorText: errorText || innerErrorText,
        getInputRef: ref,
    });

    const format = (joinedInput: string) => nativeFormat(validateDateOnInput({ joinedInput, isSingleDate, withTime }));

    return (<NumberFormatBase {...rest} format={useExperimentalDateFieldValidation ? format : nativeFormat} />);
});
