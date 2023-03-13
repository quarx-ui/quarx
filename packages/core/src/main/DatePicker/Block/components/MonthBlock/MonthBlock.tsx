/** @jsxFrag */
import React, { ForwardedRef, Fragment } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { forwardRef } from '@core/utils';
import { DatePickerTimeTypes, PickedDatesDatePicker } from '@core/src';
import { OffsetDayBlock, DayBlock } from '..';
import { getWeekdayNamesByLocale, INITIAL_WEEKDAYS, useMonthData } from '../../utils';
import { MonthBlockProps } from './types';
import { useStyles } from './styles';

export const MonthBlock = forwardRef(<T extends DatePickerTimeTypes, D extends PickedDatesDatePicker>(initialProps: MonthBlockProps<T, D>, ref: ForwardedRef<HTMLDivElement>) => {
    const { props, cn, styleProps } = usePropsOverwrites('MonthBlock', initialProps);
    const {
        innerStyles, viewingDate, onChange, dates, allowedDates, type, hoveredDay,
        setHoveredDay, isLarge, texts, times, setTimes, size, borderRadius, useIncreasedScopeDay, locale,
    } = props;
    const monthData = useMonthData(viewingDate);
    const weekdays = getWeekdayNamesByLocale(locale) || texts?.weekdays || INITIAL_WEEKDAYS();
    const params = { size, isLarge, borderRadius };
    const styles = useStyles({ ...params, ...styleProps, styles: { ...innerStyles?.monthBlock, ...styleProps.styles } });

    const commonDayOffsetProps = {
        innerStyles,
        type,
        dates,
        viewingDate,
        size,
        isLarge,
        hoveredDay,
        useIncreasedScopeDay,
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
