import { forwardRef } from '@core/utils';
import React, { ForwardedRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import {
    EDITABLE_PERIOD_PARTS,
    PERIOD_CHANGING_FLOW,
    PeriodChangingFlow,
    SelectedDates,
} from '@core/src/experimental';
import { Badge } from '@core';
import { useStyles } from './styles/index';
import { TimeBadgeProps } from './types';
import { getDateFromTimeByBadgeInPeriod, getDateFromTimeByBadgeInPicker } from './utils';
import { isPeriod, isPicker } from '../../types';

export const TimeBadge = forwardRef(<D extends SelectedDates>(
    initialProps: TimeBadgeProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, styleProps } = usePropsOverwrites('TimeBadge', initialProps);
    const { time, size, borderRadius, setTimes, innerStyles: externalStyles,
        onChange, selected, active,
        editablePartOfPeriod, onChangeEditablePartOfPeriod, periodChangingFlow, ...rest
    } = props;
    const params = { size, active };
    const styles = useStyles({
        params,
        ...styleProps,
        overwritesStyles: externalStyles?.timeBadge,
    });

    const timeBadgesChangingFlow: PeriodChangingFlow[] = [
        PERIOD_CHANGING_FLOW.AFTER_TIME_BADGE, PERIOD_CHANGING_FLOW.AFTER_EACH,
    ];

    const onSelectTime = (newTime: string) => {
        if (isPicker(selected)) {
            onChange(getDateFromTimeByBadgeInPicker({ selected, newTime, setTimes }) as D);
        } else if (isPeriod(selected)) {
            onChange(getDateFromTimeByBadgeInPeriod({ selected, newTime, setTimes, editablePartOfPeriod }) as D);
            if (timeBadgesChangingFlow.includes(periodChangingFlow)
                && editablePartOfPeriod === EDITABLE_PERIOD_PARTS.START) {
                onChangeEditablePartOfPeriod(EDITABLE_PERIOD_PARTS.END);
            }
        }
    };

    return (
        <Badge
            {...rest}
            size={size}
            borderRadius={borderRadius}
            type={active ? 'contained' : 'ghosted'}
            color="brand"
            styles={styles}
            key={time}
            onClick={() => {
                onSelectTime(time);
            }}
            ref={ref}
        >
            {time}
        </Badge>
    );
});
