import { FC } from 'react';
import {
    DatePickerBlock,
    Popup,
    usePropsOverwrites,
    forwardRef, isPicker, DatePickerProps, DatePickerMainProps,
} from '@core';
import { PopupDatePickerProps } from './types';

export const PopupDatePicker: FC<PopupDatePickerProps> = forwardRef<HTMLDivElement, PopupDatePickerProps>(((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePicker', initialProps);
    const { hidden = false, onClickAway, anchor, popupProps, type, selected, onChange, ...datePickerOtherProps } = props;
    // const { state: hidden, setOppositeState: toggleHidden, setState: setHidden, setFalse: hidePopup, setTrue: showPopup } = useBooleanWithExternalManagement(externalHidden, setExternalHidden);

    return (
        <Popup
            {...popupProps}
            ref={ref}
            open={hidden}
            onClickAway={onClickAway}
            anchor={anchor}
        >
            <DatePickerBlock
                // Для надежности вместо каста можно использовать функцию isDatePickerProps,
                // которая будет строго проверять соответствие этих трех пропсов друг другу
                {...{ type, selected, onChange } as DatePickerMainProps}
                {...datePickerOtherProps}
            />
        </Popup>
    );
}));
