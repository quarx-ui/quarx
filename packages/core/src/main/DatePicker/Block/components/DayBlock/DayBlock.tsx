import { format, getDate, isSameMonth } from 'date-fns';
import { ForwardedRef, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { mapSelectToDates, useDayProperties } from '../../utils';
import { DayBlockProps } from './types';
import { useStyles } from './styles';

export const DayBlock = forwardRef((initialProps: DayBlockProps,
    ref: ForwardedRef<HTMLDivElement>) => {
    const { styleProps, props, cn } = usePropsOverwrites('HeaderDatePicker', initialProps);
    const { onChange, dates, type, innerStyles,
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
        isDayInPeriodLarge } = useDayProperties({
        day: currentDay,
        dates,
        type,
        hoveredDay,
        viewingDate,
        allowedDates,
    });

    const onSelectDay = (item: Date) => {
        if (isDayTrusted) {
            const newDates = mapSelectToDates(item, dates, type, times, setTimes);
            onChange?.(newDates);
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
        type,
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
