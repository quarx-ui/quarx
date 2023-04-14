import { TextField, TextFieldProps, usePropsOverwrites } from '@core';
import { NumberFormatBase, usePatternFormat } from 'react-number-format';
import { ChangeEventHandler, FC, MouseEventHandler, useRef } from 'react';
import {
    getFormatValue,
    getMask,
    getPlaceholder,
} from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/utils';
import { validateJoinedDate } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/utils/validators';
import { useSelectionManager } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/DateFormatter/utils/hook';
import { DateFormatterProps } from './types';

export const DateFormatter: FC<DateFormatterProps> = (initialProps) => {
    const { props, cn, styleProps } = usePropsOverwrites('DateFormatter', initialProps);
    const { onClick: onClickExternal, onChange: onChangeExternal, isPicker, withTime,
        customDateSeparatorRegExp, ...restProps } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClickExternal?.(e);
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChangeExternal?.(e);
    };

    const { onClick: onInputClick, onMouseUp: onInputMouseUp } = useSelectionManager({ withTime, isPicker, inputRef, customDateSeparatorRegExp });

    const { format: nativeFormat, ...rest } = usePatternFormat({
        ...restProps,
        placeholder: getPlaceholder(isPicker, withTime),
        mask: getMask(isPicker, withTime),
        format: getFormatValue(isPicker, withTime),
        customInput: TextField,
        onClick,
        onChange,
        inputRef,
        allowEmptyFormatting: true,
        inputProps: {
            onClick: onInputClick,
            onMouseUp: onInputMouseUp as MouseEventHandler,
        },
    });

    const format = (joinedInput: string) => nativeFormat(validateJoinedDate({ joinedInput, isPicker, withTime }));

    return (<NumberFormatBase {...rest} format={format} />);
};

// todo подумать если стили не нужны, убрать компонент из общих
