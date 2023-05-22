import { NumberFormatBase, usePatternFormat } from 'react-number-format';
import { FC } from 'react';
import { TextField, TextFieldProps } from '@core';
import { getFormatValue, getMask, getPlaceholder } from '../utils';
import { TextFieldToFormatterProps } from './components/types';
import { TextFieldToFormatter } from './components/TextFieldToFormatter';
import { DateFormatterProps } from './types';
import { validateDateOnInput } from '../utils/inputValidators';

export const DateFormatter: FC<DateFormatterProps> = (initialProps) => {
    const { isPicker, withTime, getInputRef, useExperimentalDateFieldValidation, ...restProps } = initialProps;

    const { format: nativeFormat, ...rest } = usePatternFormat<TextFieldToFormatterProps>({
        ...restProps,
        placeholder: getPlaceholder(isPicker, withTime),
        mask: getMask(isPicker, withTime),
        format: getFormatValue(isPicker, withTime),
        useExperimentalDateFieldValidation,
        customInput: TextFieldToFormatter,
        getInputRef,
    });

    const format = (joinedInput: string) => nativeFormat(validateDateOnInput({ joinedInput, isPicker, withTime }));

    return (<NumberFormatBase {...rest} format={useExperimentalDateFieldValidation ? format : nativeFormat} />);
};
