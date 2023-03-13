import { ForwardedRef } from 'react';
import {
    DatePickerBlock, DatePickerTimeTypes,
    PickedDatesDatePicker,
    Popup,
    usePropsOverwrites,
    forwardRef,
} from '@core';
import { PopupDatePickerPropsGeneric } from './types';

export const PopupDatePicker = forwardRef((<T extends DatePickerTimeTypes, D extends PickedDatesDatePicker>(
    initialProps: PopupDatePickerPropsGeneric<T, D>,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePicker', initialProps);
    const { hidden = false, onClickAway, anchor, popupProps, ...datePickerProps } = props;
    // const { state: hidden, setOppositeState: toggleHidden, setState: setHidden, setFalse: hidePopup, setTrue: showPopup } = useBooleanWithExternalManagement(externalHidden, setExternalHidden);

    return (
        <Popup
            {...popupProps}
            ref={ref}
            open={hidden}
            onClickAway={onClickAway}
            anchor={anchor}
        >
            <DatePickerBlock<T, D> {...datePickerProps} />
        </Popup>
    );
}));
