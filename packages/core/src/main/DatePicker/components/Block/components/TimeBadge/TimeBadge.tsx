import { forwardRef } from '@core/utils';
import React, { ForwardedRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { isPeriod, isPicker, SelectedDates } from '@core/src';
import { Badge } from '@core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { TimeBadgeProps } from './types';
import { getDateFromTimeByBadgeInPeriod, getDateFromTimeByBadgeInPicker } from './utils';

export const TimeBadge = forwardRef(<D extends SelectedDates>(
    initialProps: TimeBadgeProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('TimeBadge', initialProps);
    const { time, size, borderRadius, setTimes, innerStyles: externalStyles, lastEditedDateTypeInPeriod, onChange, selected, active } = props;
    const params = { size, active };
    const classes = useStyles({
        params,
        ...styleProps,
        styles: {
            ...externalStyles?.timeBadge,
            ...styleProps.styles,
        } });

    const onSelectTime = (newTime: string) => {
        if (isPicker(selected)) {
            onChange(getDateFromTimeByBadgeInPicker({ selected, newTime, setTimes }) as D);
        } else if (isPeriod(selected)) {
            onChange(getDateFromTimeByBadgeInPeriod({ selected, newTime, setTimes, lastEditedDateTypeInPeriod }) as D);
        }
    };

    return (
        <Badge
            size={size}
            borderRadius={borderRadius}
            type={
                active
                    ? 'contained' : 'ghosted'
            }
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
