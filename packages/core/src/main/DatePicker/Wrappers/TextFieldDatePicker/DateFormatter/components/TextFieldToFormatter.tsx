import {
    forwardRef, isNullOrUndefined,
    TextField,
    useEventCallback,
} from '@core';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { TextFieldToFormatterProps } from './types';

export const TextFieldToFormatter: FC<TextFieldToFormatterProps> = forwardRef<HTMLDivElement, TextFieldToFormatterProps>(({
    onKeyDown,
    onMouseUp,
    onFocus,
    onBlur,
    value: externalValue,
    onChange,
    useExperimentalDateFieldValidation,
    ...textFieldProps
}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectionStart, setSelectionStart] = useState<number | null>(null);
    const [selectionEnd, setSelectionEnd] = useState<number | null>(null);
    const [value, setValue] = useState<string | undefined>(externalValue);

    const changeCaretPosition = (start: number, end: number) => {
        inputRef.current?.focus();
        return setTimeout(() => { inputRef.current?.setSelectionRange(start, end); }, 0);
    };

    const handleOnChange = useEventCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (useExperimentalDateFieldValidation) {
            if (!isNullOrUndefined(e.target.selectionStart)
                && !isNullOrUndefined(selectionStart)
                && !isNullOrUndefined(selectionEnd)
                && !isNullOrUndefined(e.target.selectionEnd)
                && e.target.selectionStart < selectionStart && e.target.selectionEnd < selectionEnd
            ) {
                setSelectionStart(selectionStart + 1);
                setSelectionEnd(selectionEnd + 1);
            }
            setSelectionStart(e.target.selectionStart);
            setSelectionEnd(e.target.selectionEnd);
        }
        onChange?.(e);
    });

    useEffect(() => {
        if (inputRef.current && useExperimentalDateFieldValidation) {
            if (selectionStart && selectionEnd) {
                inputRef.current?.focus();
                const timeout = changeCaretPosition(selectionStart, selectionEnd);
                return () => clearTimeout(timeout);
            }
            setValue(externalValue);
        }
        return undefined;
    }, [externalValue, selectionEnd, selectionStart, useExperimentalDateFieldValidation, value]);

    useEffect(() => {
        if (useExperimentalDateFieldValidation) {
            setValue(externalValue);
        }
    }, [externalValue, useExperimentalDateFieldValidation]);

    return (
        <TextField
            {...textFieldProps}
            ref={ref}
            value={useExperimentalDateFieldValidation ? value : externalValue}
            inputRef={inputRef}
            inputProps={{ ...textFieldProps.inputProps, onFocus, onBlur, onKeyDown, onMouseUp }}
            onChange={handleOnChange}
        />
    );
});
