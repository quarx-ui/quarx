import { TextFieldProps } from '@core';
import { FocusEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';

export interface DateInputProps extends TextFieldProps {
    onKeyDown?: KeyboardEventHandler<HTMLInputElement> & KeyboardEventHandler<HTMLTextAreaElement>;
    onMouseUp?: MouseEventHandler<HTMLInputElement> & MouseEventHandler<HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLInputElement> & FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler;
    useExperimentalDateFieldValidation: boolean;
}
