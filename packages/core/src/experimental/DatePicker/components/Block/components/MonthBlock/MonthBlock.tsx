import React, { ForwardedRef, Fragment } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { forwardRef } from '@core/utils';
import { SelectedDates } from '@core/src/experimental';
import { OffsetDayBlock, DayBlock } from '..';
import { getWeekdayNamesByLocale, INITIAL_WEEKDAYS, useMonthData } from '../../utils';
import { MonthBlockProps } from './types';
import { useStyles } from './styles/index';

export const MonthBlock = forwardRef(<D extends SelectedDates>(
    initialProps: MonthBlockProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('MonthBlock', initialProps);
    const {
        innerStyles, viewingDate, onChange, selected, allowedDates, hoveredDay,
        setHoveredDay, isLarge, texts, times, setTimes, size, borderRadius, bigPressScope, locale,
        periodChangingFlow, editablePartOfPeriod, onChangeEditablePartOfPeriod, clearAllAfterChangingStartDate,
        pickNewSelectedAfterEndDatePick,
    } = props;
    const monthData = useMonthData(viewingDate);
    const weekdays: string[] = getWeekdayNamesByLocale(locale) || texts?.weekdays || INITIAL_WEEKDAYS();
    const params = { size, isLarge, borderRadius };
    const styles = useStyles({ params, ...styleProps, overwritesStyles: innerStyles?.monthBlock });

    const commonDayOffsetProps = {
        innerStyles,
        selected,
        viewingDate,
        size,
        isLarge,
        hoveredDay,
        bigPressScope,
    };

    const dayProps = {
        ...commonDayOffsetProps,
        onChange,
        allowedDates,
        setHoveredDay,
        times,
        setTimes,
        borderRadius,
        periodChangingFlow,
        onChangeEditablePartOfPeriod,
        editablePartOfPeriod,
        clearAllAfterChangingStartDate,
        pickNewSelectedAfterEndDatePick,
    };

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
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
                        className={cn('weekdayContainer')}
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
