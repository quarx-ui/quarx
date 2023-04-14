import { Ref } from 'react';
import {
    DatePickerBlock,
    Popup,
    usePropsOverwrites,
    forwardRef, SelectedDatesDatePicker,
} from '@core';
import { useStyles } from './styles';
import { PopupDatePickerProps } from './types';

export const PopupDatePicker = forwardRef(<D extends SelectedDatesDatePicker>(
    initialProps: PopupDatePickerProps<D>,
    ref: Ref<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('PopupDatePicker', initialProps);
    const { open, onClickAway, anchor, popupProps, zIndex, ...datePickerProps } = props;

    const params = { zIndex };

    const styles = useStyles({ ...params, ...styleProps });
    // const { open, onClickAway, anchor, popupProps: { disablePortal = false, ...popupProps }, ...datePickerProps } = props;
    // const { state: hidden, setOppositeState: toggleHidden, setState: setHidden, setFalse: hidePopup, setTrue: showPopup } = useBooleanWithExternalManagement(externalHidden, setExternalHidden);
    return (
        <Popup
            disablePortal
            disableBackdrop
            placement="bottom-start"
            reference="window"
            className={cn('root', params)}
            css={styles.root}
            {...popupProps}
            ref={ref}
            open={open}
            onClickAway={onClickAway}
            anchor={anchor}
        >
            <DatePickerBlock {...datePickerProps} />
        </Popup>
    );
});
