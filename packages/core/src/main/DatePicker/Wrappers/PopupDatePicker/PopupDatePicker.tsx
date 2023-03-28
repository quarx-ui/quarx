import { FC } from 'react';
import {
    DatePickerBlock,
    Popup,
    usePropsOverwrites,
    forwardRef, isPicker, DatePickerProps,
} from '@core';
import { PopupDatePickerProps } from './types';

export const PopupDatePicker: FC<PopupDatePickerProps> = forwardRef<HTMLDivElement, PopupDatePickerProps>(((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePicker', initialProps);
    const { hidden = false, onClickAway, anchor, popupProps, datePickerProps } = props;
    // const { state: hidden, setOppositeState: toggleHidden, setState: setHidden, setFalse: hidePopup, setTrue: showPopup } = useBooleanWithExternalManagement(externalHidden, setExternalHidden);

    return (
        <Popup
            {...popupProps}
            ref={ref}
            open={hidden}
            onClickAway={onClickAway}
            anchor={anchor}
        >
            <DatePickerBlock {...datePickerProps} />
        </Popup>
    );
}));
