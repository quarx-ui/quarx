import { format, getDate, isSameMonth } from 'date-fns';
import { ForwardedRef, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { DATE_PICKER_TIME_TYPES, isPicker, SelectedDatesDatePicker } from '@core/src';
import {
    mergeDateWithSelected,
    useDayProperties,
} from '../../utils';
import { DayBlockProps } from './types';
import { useStyles } from './styles';

export const DayBlock = forwardRef(<D extends SelectedDatesDatePicker>(initialProps: DayBlockProps<D>,
    ref: ForwardedRef<HTMLDivElement>) => {
    const { styleProps, props, cn } = usePropsOverwrites('HeaderDatePicker', initialProps);
    const { onChange, selected, innerStyles,
        viewingDate, allowedDates, hoveredDay, setHoveredDay, times, useIncreasedScopeDay,
        setTimes, currentDay, size, borderRadius, numDay, isLarge } = props;

    const { isDayInPeriod,
        isDayTrusted,
        isHoveredPeriod,
        isDayInHoveredPeriod,
        isEqualDays,
        isDayLastInPeriod,
        isDayFirstInPeriod,
        isPeriodSelected,
        isDayInViewableMonth,
        isDaySelected,
        isDayHovered,
        isSecondPickInPeriod,
        isDayInPeriodLarge } = useDayProperties<D>({
        day: currentDay,
        selected,
        hoveredDay,
        viewingDate,
        allowedDates,
    });

    const onSelectDay = (item: Date) => {
        if (isDayTrusted) {
            onChange(mergeDateWithSelected<D>(item, times, setTimes, selected));
        }
        setHoveredDay?.(undefined);
    };

    const params = {
        size,
        borderRadius,
        numDay,
        isDayInPeriod,
        isDayTrusted,
        isHoveredPeriod,
        isDayInHoveredPeriod,
        isEqualDays,
        isDayLastInPeriod,
        isDayFirstInPeriod,
        isPeriodSelected,
        isDayInViewableMonth,
        isDaySelected,
        isDayHovered,
        isSecondPickInPeriod,
        isDayInPeriodLarge,
        useIncreasedScopeDay,
        type: isPicker(selected) ? DATE_PICKER_TIME_TYPES.PICKER : DATE_PICKER_TIME_TYPES.PERIOD,
        isLarge,
    };

    const styles = useStyles({ ...params, ...styleProps, styles: { ...styleProps.styles, ...innerStyles?.day } });

    return (
        <div
            css={styles.dayPressContainer}
            className={cn('dayPressContainer', params)}
            onClick={useIncreasedScopeDay ? () => onSelectDay(currentDay) : undefined}
            onMouseEnter={() => {
                if (isDayTrusted && (isLarge ? isSameMonth(currentDay, viewingDate) : true) && useIncreasedScopeDay) {
                    setHoveredDay?.(currentDay);
                }
            }}
            ref={ref}
        >
            <div
                css={styles.dayContainer}
                className={cn('dayContainer', params)}
                onMouseEnter={() => {
                    if (isDayTrusted && (isLarge ? isSameMonth(currentDay, viewingDate) : true)
                        && !useIncreasedScopeDay) {
                        setHoveredDay?.(currentDay);
                    }
                }}
            >
                <button
                    type="button"
                    css={styles.day}
                    className={cn('day', params)}
                    key={format(currentDay, 'dd-MM-yyyy')}
                    onClick={!useIncreasedScopeDay ? () => onSelectDay(currentDay) : undefined}
                >
                    <time dateTime={format(currentDay, 'yyyy-MM-dd HH:mm')}>
                        {getDate(currentDay)}
                    </time>
                </button>
            </div>
        </div>
    );
});
