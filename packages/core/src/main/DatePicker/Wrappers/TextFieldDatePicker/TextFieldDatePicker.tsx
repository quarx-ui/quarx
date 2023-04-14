import {
    DatePickerProps,
    isPicker,
    SelectedDatesDatePicker,
    TextField,
    useBooleanState,
    usePropsOverwrites,
} from '@core';
import { forwardRef } from '@core/utils';
import { PopupDatePicker } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker';
import { ChangeEventHandler, MouseEventHandler, Ref, useRef, useState } from 'react';
import { TextFieldDatePickerProps } from './types';
import { changeSelectedByValue } from './utils/setters';
import { DATE_SEPARATORS_REGEXP } from './DateFormatter/utils/constants';
import { DateFormatter } from './DateFormatter';
import { mapSelectedToTextFieldValue } from './utils';

export const TextFieldDatePicker = forwardRef(<D extends SelectedDatesDatePicker>(initialProps: TextFieldDatePickerProps<D>, ref: Ref<HTMLDivElement>) => {
    const { props, styleProps, cn } = usePropsOverwrites('TextFieldDatePicker', initialProps);
    const anchor = useRef<HTMLDivElement>(null);
    const { selected, open = false, withTime = false, onChange, customDateSeparatorRegExp = DATE_SEPARATORS_REGEXP, viewingDate: initialViewingDate, ...popupDatePickerProps } = props;
    const { state: isOpen, setTrue: openPopup, setFalse: closePopup } = useBooleanState(open);
    const [textFieldValue, setTextFieldValue] = useState(mapSelectedToTextFieldValue(selected, withTime));
    const [viewingDate, setViewingDate] = useState<DatePickerProps['viewingDate']>(initialViewingDate);
    const isPickerType = isPicker(selected);

    const onTextFieldClick: MouseEventHandler<HTMLDivElement> = (e) => {
        openPopup();
    };

    const onTextFieldChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
        setTextFieldValue(value);
        changeSelectedByValue<D>({ onChange, isPickerType, withTime, value, setViewingDate });
    };

    return (
        <div ref={ref}>
            <DateFormatter
                onClick={onTextFieldClick}
                onChange={onTextFieldChange}
                getInputRef={anchor}
                value={textFieldValue}
                isPicker={isPickerType}
                withTime={withTime}
                customDateSeparatorRegExp={customDateSeparatorRegExp}
            />
            <PopupDatePicker
                {...popupDatePickerProps}
                selected={selected}
                viewingDate={viewingDate}
                onChange={onChange}
                withTime={withTime}
                open={isOpen}
                onClickAway={closePopup}
                anchor={anchor}
            />
        </div>
    );
});
