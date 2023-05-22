import React, { ForwardedRef, Fragment } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { forwardRef } from '@core/utils';
import { SelectedDates } from '@core/src';
import { OffsetDayBlock, DayBlock } from '..';
import { getWeekdayNamesByLocale, INITIAL_WEEKDAYS, useMonthData } from '../../utils';
import { MonthBlockProps } from './types';
import { useStyles } from './styles';

export const MonthBlock = forwardRef(<D extends SelectedDates>(initialProps: MonthBlockProps<D>, ref: ForwardedRef<HTMLDivElement>) => {
    const { props, cn, styleProps } = usePropsOverwrites('MonthBlock', initialProps);
    const {
        innerStyles, viewingDate, onChange, selected, allowedDates, hoveredDay,
        setHoveredDay, isLarge, texts, times, setTimes, size, borderRadius, useIncreasedScopeDay, locale,
        setLastEditedDateTypeInPeriod,
    } = props;
    const monthData = useMonthData(viewingDate);
    const weekdays: string[] = getWeekdayNamesByLocale(locale) || texts?.weekdays || INITIAL_WEEKDAYS();
    const params = { size, isLarge, borderRadius };
    const styles = useStyles({ params, ...styleProps, styles: { ...innerStyles?.monthBlock, ...styleProps.styles } });

    const commonDayOffsetProps = {
        innerStyles,
        selected,
        viewingDate,
        size,
        isLarge,
        hoveredDay,
        useIncreasedScopeDay,
        setLastEditedDateTypeInPeriod,
    };

    const dayProps = {
        ...commonDayOffsetProps,
        onChange,
        allowedDates,
        setHoveredDay,
        times,
        setTimes,
        borderRadius,
    };

    return (
        <div
            css={styles.monthBlock}
            className={cn('monthBlock', params)}
            ref={ref}
        >
            {weekdays.map((item, i) => (
                <Fragment key={`weekdayName_${item}`}>
                    <OffsetDayBlock
                        {...commonDayOffsetProps}
                        numDay={i}
                        day={new Date()}
                        isWeekdayName
                    />
                    <div
                        key={`${item}`}
                        css={styles.weekdayContainer}
                        className={cn('weekdayContainer', params)}
                    >
                        {item}
                    </div>
                </Fragment>
            ))}
            {monthData.map((week) => (
                week.map((day, i) => (
                    <Fragment key={day.toString()}>
                        <OffsetDayBlock
                            {...commonDayOffsetProps}
                            day={day}
                            numDay={i}
                        />
                        <DayBlock
                            {...dayProps}
                            currentDay={day}
                            numDay={i}
                        />
                    </Fragment>
                ))))}
        </div>
    );
});
