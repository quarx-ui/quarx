import { NumberFormatBase, usePatternFormat } from 'react-number-format';
import { ChangeEventHandler, Ref, useEffect, useMemo, useState } from 'react';
import { forwardRef } from '@core/utils';
import { SelectedDates } from '@core/src/experimental';
import { DEFAULT_TEXTS } from './constants';
import { isEmptySelected, isEqualValue, validateDateString } from './utils/validators';
import {
    mapSelectedToTextFieldValue,
    getFormatValue,
    getMask,
    getPlaceholder,
    mapTextFieldValueToSelected, getPlaceholderDate,
} from './utils';
import { DateInputProps } from './components/types';
import { DateInput } from './components/DateInput';
import { DateFieldProps, DateFieldTexts } from './types';
import { validateDateOnInput } from './utils/inputValidators';

export const DateField = forwardRef(<D extends SelectedDates>(
    initialProps: DateFieldProps<D>, ref: Ref<HTMLDivElement>,
) => {
    // todo определенно нужно делать компонент умнее и добавить все пропсы валидации значений, как в календаре
    // todo а также перенести логику splittedPeriod из DatePickerSelect (работа капитальная, по времени займет прилично)
    const { isSingleDate, withTime, useExperimentalDateFieldValidation = false,
        value: dateValueExternal, onChange: onChangeExternal, errorText, texts,
        withSeconds, ...restProps } = initialProps;
    const {
        errorByValidateFirstDate = DEFAULT_TEXTS.errorByValidateFirstDate,
        errorByValidateLastDate = DEFAULT_TEXTS.errorByValidateLastDate,
        errorByValidationSingleDate = DEFAULT_TEXTS.errorByValidationSingleDate,
    } = texts || {};

    const errorsFromInput: Required<DateFieldTexts> = {
        errorByValidateFirstDate,
        errorByValidateLastDate,
        errorByValidationSingleDate,
    };

    const [innerErrorText, setInnerErrorText] = useState(errorText || '');
    const [dateValue, setDateValue] = useState(dateValueExternal);
    const [value, setValue] = useState(mapSelectedToTextFieldValue(dateValue, withTime, withSeconds));

    const placeholderDate = useMemo(() => getPlaceholderDate(withTime, withSeconds), [withSeconds, withTime]);

    const onChangeValue = (newValue: string) => {
        const newDate = mapTextFieldValueToSelected({
            value: newValue,
            selected: dateValue,
            isSingleDate,
            withTime,
            withSeconds,
            setErrorText: setInnerErrorText,
            errorsFromInput,
        }) as D;
        setValue(newValue);
        if (validateDateString(newValue, placeholderDate)) {
            setDateValue(newDate);
            onChangeExternal(newDate);
        }
    };

    const onChangeEvent: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value: newValue } }) => {
        onChangeValue(newValue);
    };

    const onClear = () => {
        onChangeValue('');
        setInnerErrorText('');
    };

    useEffect(() => {
        if (!errorText && !isEqualValue(dateValue, dateValueExternal) && !isEmptySelected(dateValueExternal)) {
            setDateValue(dateValueExternal);
            setValue(mapSelectedToTextFieldValue(dateValueExternal, withTime, withSeconds));
            setInnerErrorText(errorText || '');
        }
    }, [dateValue, dateValueExternal, errorText, withTime, withSeconds]);

    useEffect(() => {
        if (errorText !== innerErrorText) {
            setInnerErrorText(errorText || '');
        }
    }, [errorText, innerErrorText]);

    const { format: nativeFormat, ...rest } = usePatternFormat<DateInputProps>({
        ...restProps,
        value,
        onChange: onChangeEvent,
        onClear,
        placeholder: getPlaceholder(dateValueExternal, withTime, withSeconds),
        mask: getMask(dateValueExternal, withTime, withSeconds),
        format: getFormatValue(dateValueExternal, isSingleDate, withTime, withSeconds),
        useExperimentalDateFieldValidation,
        customInput: DateInput,
        errorText: errorText || innerErrorText,
        getInputRef: ref,
    });

    const format = (joinedInput: string) => nativeFormat(validateDateOnInput(
        { joinedInput, selected: dateValue, isSingleDate, withTime, withSeconds },
    ));

    return (<NumberFormatBase {...rest} format={useExperimentalDateFieldValidation ? format : nativeFormat} />);
});
