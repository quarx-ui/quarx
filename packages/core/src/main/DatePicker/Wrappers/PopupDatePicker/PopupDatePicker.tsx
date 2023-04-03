import { Ref } from 'react';
import {
    DatePickerBlock,
    Popup,
    usePropsOverwrites,
    forwardRef, SelectedDatesDatePicker,
} from '@core';
import { PopupDatePickerProps } from './types';

export const PopupDatePicker = forwardRef(<D extends SelectedDatesDatePicker>(
    initialProps: PopupDatePickerProps<D>,
    ref: Ref<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('PopupDatePicker', initialProps);
    const { open, onClickAway, anchor, popupProps, ...datePickerProps } = props;
    // const { open, onClickAway, anchor, popupProps: { disablePortal = false, ...popupProps }, ...datePickerProps } = props;
    // const { state: hidden, setOppositeState: toggleHidden, setState: setHidden, setFalse: hidePopup, setTrue: showPopup } = useBooleanWithExternalManagement(externalHidden, setExternalHidden);
    console.log(popupProps?.disablePortal);
    return (
        <Popup
            disablePortal
            {...popupProps}
            ref={ref}
            open={open}
            onClickAway={onClickAway}
            anchor={anchor}
            placement="bottom-start"
            // reference="window"
        >
            <DatePickerBlock {...datePickerProps} />
        </Popup>
    );
});
