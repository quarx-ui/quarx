import { forwardRef } from '@core/utils';
import React, { ForwardedRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import {
    EDITABLE_PERIOD_PARTS,
    isPeriod,
    isPicker,
    PERIOD_CHANGING_FLOW,
    PeriodChangingFlow,
    SelectedDates,
} from '@core/src';
import { Badge } from '@core';
import { useStyles } from './styles';
import { TimeBadgeProps } from './types';
import { getDateFromTimeByBadgeInPeriod, getDateFromTimeByBadgeInPicker } from './utils';

export const TimeBadge = forwardRef(<D extends SelectedDates>(
    initialProps: TimeBadgeProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('TimeBadge', initialProps);
    const { time, size, borderRadius, setTimes, innerStyles: externalStyles,
        onChange, selected, active,
        editablePartOfPeriod, onChangeEditablePartOfPeriod, periodChangingFlow,
    } = props;
    const params = { size, active };
    const classes = useStyles({
        params,
        ...styleProps,
        styles: {
            ...externalStyles?.timeBadge,
            ...styleProps.styles,
        } });

    const timeBadgesChangingFlow: PeriodChangingFlow[] = [PERIOD_CHANGING_FLOW.AFTER_TIME_BADGE, PERIOD_CHANGING_FLOW.AFTER_EACH];

    const onSelectTime = (newTime: string) => {
        if (isPicker(selected)) {
            onChange(getDateFromTimeByBadgeInPicker({ selected, newTime, setTimes }) as D);
        } else if (isPeriod(selected)) {
            onChange(getDateFromTimeByBadgeInPeriod({ selected, newTime, setTimes, editablePartOfPeriod }) as D);
            if (timeBadgesChangingFlow.includes(periodChangingFlow) && editablePartOfPeriod === EDITABLE_PERIOD_PARTS.START) {
                onChangeEditablePartOfPeriod(EDITABLE_PERIOD_PARTS.END);
            }
        }
    };

    return (
        <Badge
            size={size}
            borderRadius={borderRadius}
            type={active ? 'contained' : 'ghosted'}
            color="brand"
            styles={{
                root: classes.badge,
            }}
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
