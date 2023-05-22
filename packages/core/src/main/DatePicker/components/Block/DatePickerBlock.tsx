import React, { Ref, useEffect, useMemo, useRef, useState } from 'react';
import {
    DatePickerProps, isPeriod, isPicker, SelectedDates,
    useMedia,
    usePropsOverwrites,
} from '@core';
import { forwardRef } from '@core/utils';
import { addMonths, getWeeksInMonth } from 'date-fns';
import { DatePickerRightSection } from './components/DatePickerRightSection';
import { LastEditedDateType, TIMES_TO_TIME_BADGES, useDropdownDatePicker } from './utils';
import { MonthBlock, HeaderDatePicker, DROPDOWN_TYPES, DatePickerDropdown, FooterDatePicker } from '.';
import { getTimeFromDate } from './components/FooterDatePicker/utils';
import { DATE_PICKER_DISPLAY_TYPES } from './types';
import { useStyles } from './styles';

export const DatePickerBlock = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerProps<D>, ref: Ref<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePicker', initialProps);

    const {
        onChange, innerStyles, useIncreasedScopeDay: externalUseIncreasedDay = false,
        selected, allowedDates, viewingDate: externalViewingDate, locale,
        display = DATE_PICKER_DISPLAY_TYPES.SINGLE, borderRadius = 'small', size = 'large', texts, yearsArr, withTime,
        disableYearChanging, useTimeBadges = false, timesToTimeBadges = TIMES_TO_TIME_BADGES,
        // editablePartOfPeriod: externalEditablePartOfPeriod,
        // onChangeEditablePartOfPeriod: externalOnChangeEditablePartOfPeriod,
        // disableDefaultPeriodFlowChanging,
        ...restProps
    } = props;

    const isLarge = useMemo(() => display === DATE_PICKER_DISPLAY_TYPES.DOUBLE, [display]);
    const isMobile = useMedia('mobile');
    const useIncreasedScopeDay = externalUseIncreasedDay || isMobile;

    const [dates, setDates] = useState<SelectedDates>(selected);
    const [pickedTime, setPickedTime] = useState<string>(getTimeFromDate(isPicker(dates) ? dates : undefined));
    const [startTime, setStartTime] = useState<string>(getTimeFromDate(isPeriod(dates) ? dates.start : undefined));
    const [endTime, setEndTime] = useState<string>(getTimeFromDate(isPeriod(dates) ? dates.end : undefined));
    const times = { pickedTime, startTime, endTime };
    const setTimes = { setPickedTime, setStartTime, setEndTime };

    const refDropdown = useRef<HTMLDivElement>(null);
    const monthDropdownData = useDropdownDatePicker(
        DROPDOWN_TYPES.MONTHS,
        { locale, content: texts?.monthNames },
    );
    const yearDropdownData = useDropdownDatePicker(DROPDOWN_TYPES.YEARS, { locale, content: yearsArr });
    const isDropdownOpened = monthDropdownData.isOpen || yearDropdownData.isOpen;

    const [lastEditedDateTypeInPeriod, setLastEditedDateTypeInPeriod] = useState<LastEditedDateType | undefined>(undefined);

    const [viewingDate, setViewingDate] = useState<Date>(externalViewingDate || new Date());
    const countWeeksInMonth = getWeeksInMonth(viewingDate);

    const params = { countWeeksInMonth, isLarge, borderRadius, size };

    const styles = useStyles({ params, ...styleProps });

    const [hoveredDay, setHoveredDay] = useState<Date | undefined>();
    const onSelectDay = (newDates: SelectedDates) => {
        onChange(newDates as D);
        setDates(newDates);
    };

    useEffect(() => {
        if (selected !== dates) {
            setDates(selected);
        }
    }, [dates, selected]);

    useEffect(() => {
        if (externalViewingDate) {
            setViewingDate(externalViewingDate);
        }
    }, [externalViewingDate]);

    const commonMonthBlockProps = {
        selected: dates,
        onChange: onSelectDay,
        styles: innerStyles?.monthBlock,
        isLarge,
        hoveredDay,
        setHoveredDay,
        times,
        setTimes,
        allowedDates,
        size,
        borderRadius,
        useIncreasedScopeDay,
        locale,
        setLastEditedDateTypeInPeriod,
    };

    return (
        <div
            {...restProps}
            className={cn('root', params)}
            css={styles.root}
            ref={ref}
            onMouseLeave={() => {
                setHoveredDay(undefined);
            }}
        >
            <div
                css={styles.content}
                className={cn('content', params)}
            >
                <div
                    css={styles.leftContent}
                    className={cn('leftContent', params)}
                >
                    <HeaderDatePicker
                        viewingDate={viewingDate}
                        setViewingDate={setViewingDate}
                        innerStyles={innerStyles}
                        dropdownData={{
                            monthDropdownData,
                            yearDropdownData,
                        }}
                        refDropdown={refDropdown}
                        isLarge={isLarge}
                        disableYearChanging={disableYearChanging}
                        size={size}
                        borderRadius={borderRadius}
                    />
                    {monthDropdownData.isOpen && (
                        <DatePickerDropdown
                            viewingDate={viewingDate}
                            size={size}
                            refDropdown={refDropdown}
                            dropdownData={monthDropdownData}
                            type={DROPDOWN_TYPES.MONTHS}
                            innerStyles={innerStyles}
                            setViewingDate={setViewingDate}
                            countWeeksInMonth={countWeeksInMonth}
                            key="MonthHeaderDropdown"
                        />
                    )}
                    {yearDropdownData.isOpen && (
                        <DatePickerDropdown
                            viewingDate={viewingDate}
                            size={size}
                            refDropdown={refDropdown}
                            dropdownData={yearDropdownData}
                            type={DROPDOWN_TYPES.YEARS}
                            innerStyles={innerStyles}
                            setViewingDate={setViewingDate}
                            countWeeksInMonth={countWeeksInMonth}
                            key="YearsHeaderDropdown"
                        />
                    )}
                    <div css={styles.calendar}>
                        {!isDropdownOpened && (
                            <MonthBlock
                                {...commonMonthBlockProps}
                                viewingDate={viewingDate}
                                key="MonthBlock_1"
                            />
                        )}
                        {isLarge && (
                            <MonthBlock
                                {...commonMonthBlockProps}
                                viewingDate={addMonths(viewingDate, 1)}
                                key="MonthBlock_2"
                            />
                        )}
                    </div>
                </div>
                {useTimeBadges && withTime && !isDropdownOpened && (
                    <DatePickerRightSection
                        timesToTimeBadges={timesToTimeBadges}
                        key="TimeBadges"
                        size={size}
                        borderRadius={borderRadius}
                        countWeeksInMonth={countWeeksInMonth}
                        timeText={texts?.time || 'Время'}
                        allowedDates={allowedDates}
                        selected={selected}
                        onChange={onChange}
                        times={times}
                        setTimes={setTimes}
                        lastEditedDateTypeInPeriod={lastEditedDateTypeInPeriod}
                    />
                )}
            </div>
            {withTime && !isDropdownOpened && !useTimeBadges && (
                <FooterDatePicker
                    times={times}
                    setTimes={setTimes}
                    innerStyles={innerStyles}
                    selected={dates}
                    size={size}
                    onChange={onSelectDay}
                    borderRadius={borderRadius}
                    startTimeText={texts?.startTime || 'Начало'}
                    endTimeText={texts?.endTime || 'Конец'}
                    selectedTimeLabel={texts?.time || 'Время'}
                    errorValidateTime={texts?.errorValidateCalendarTime || 'Некорректное время'}
                    key="FooterDatePicker"
                />
            )}
        </div>
    );
});
