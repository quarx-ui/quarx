import { Ref } from 'react';
import {
    Popup,
    usePropsOverwrites,
    forwardRef,
} from '@core';
import { SelectedDates, DatePickerBlock } from '../..';
import { useStyles } from './styles';
import { DatePickerProps } from './types';

export const DatePicker = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerProps<D>,
    ref: Ref<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePicker', initialProps);
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
