import { Ref } from 'react';
import {
    Popup,
    usePropsOverwrites,
    forwardRef,
} from '@core';
import { SelectedDates, DatePickerBlock } from '@core/src/experimental';
import { useStyles } from './styles';
import { PopupDatePickerProps } from './types';

export const PopupDatePicker = forwardRef(<D extends SelectedDates>(
    initialProps: PopupDatePickerProps<D>,
    ref: Ref<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('PopupDatePicker', initialProps);
    const { open, onClickAway, anchor, popupProps, zIndex, ...datePickerProps } = props;

    const params = { zIndex };

    const styles = useStyles({ params, ...styleProps });
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
