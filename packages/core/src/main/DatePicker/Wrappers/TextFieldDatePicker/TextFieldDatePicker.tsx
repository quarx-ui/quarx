import { SelectedDatesDatePicker, TextField, useBooleanState, usePropsOverwrites } from '@core';
import { forwardRef } from '@core/utils';
import { PopupDatePicker } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker';
import { Ref, useRef, useState } from 'react';
import { TextFieldDatePickerProps } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/types';

export const TextFieldDatePicker = forwardRef(<D extends SelectedDatesDatePicker>(initialProps: TextFieldDatePickerProps<D>, ref: Ref<HTMLDivElement>) => {
    const { props, styleProps, cn } = usePropsOverwrites('TextFieldDatePicker', initialProps);
    const anchor = useRef<HTMLDivElement>(null);
    const { selected, open, ...popupDatePickerProps } = props;
    const { state: isOpen, setTrue: openPopup, setFalse: closePopup } = useBooleanState(open);
    const [textFieldValue, setTextFieldValue] = useState('');
    const onTextFieldClick = () => {
        openPopup();
    };

    return (
        <div ref={ref}>
            <TextField
                ref={anchor}
                value={textFieldValue}
                onClick={onTextFieldClick}
                onChange={({ currentTarget: { value } }) => setTextFieldValue(value)}
            />
            <PopupDatePicker
                selected={selected}
                {...popupDatePickerProps}
                open={isOpen}
                onClickAway={closePopup}
                anchor={anchor}
            />
        </div>
    );
});
