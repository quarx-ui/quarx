import React, { FC, useMemo, useRef, useState } from 'react';
import {
    DatePickerProps, SelectedDatesDatePicker,
    useMedia,
    usePropsOverwrites,
} from '@core';
import { forwardRef } from '@core/utils';
import { addMonths, getWeeksInMonth } from 'date-fns';
import { useInitialDates, useDropdownDatePicker } from './utils';
import { MonthBlock, HeaderDatePicker, DROPDOWN_TYPES, DatePickerDropdown, FooterDatePicker } from '.';
import { getTimeFromDate } from './components/FooterDatePicker/utils';
import { DATE_PICKER_DISPLAY_TYPES } from './types';
import { useStyles } from './styles';

export const DatePickerBlock: FC<DatePickerProps> = forwardRef<HTMLDivElement, DatePickerProps>((
    initialProps, ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePicker', initialProps);

    const {
        onChange, innerStyles, useIncreasedScopeDay: externalUseIncreasedDay = false,
        pickedDates, type, allowedDates, initialViewingDate, locale,
        display = DATE_PICKER_DISPLAY_TYPES.SINGLE, borderRadius = 'small', size = 'large', texts, yearsArr, withTime,
        disableYearChange, ...restProps
    } = props;

    const isLarge = useMemo(() => display === DATE_PICKER_DISPLAY_TYPES.DOUBLE, [display]);
    const isMobile = useMedia('mobile');
    const useIncreasedScopeDay = externalUseIncreasedDay || isMobile;

    const [dates, setDates] = useInitialDates(type, pickedDates);
    const [pickedTime, setPickedTime] = useState<string>(getTimeFromDate('selectedDate', dates));
    const [startTime, setStartTime] = useState<string>(getTimeFromDate('startDate', dates));
    const [endTime, setEndTime] = useState<string>(getTimeFromDate('endDate', dates));
    const times = { pickedTime, startTime, endTime };
    const setTimes = {
        setPickedTime, setStartTime, setEndTime,
    };

    const refDropdown = useRef<HTMLDivElement>(null);
    const monthDropdownData = useDropdownDatePicker(
        DROPDOWN_TYPES.MONTHS,
        { locale, content: texts?.monthNames },
    );
    const yearDropdownData = useDropdownDatePicker(DROPDOWN_TYPES.YEARS, { locale, content: yearsArr });
    const isDropdownOpened = monthDropdownData.isOpen || yearDropdownData.isOpen;

    const [viewingDate, setViewingDate] = useState<Date>(initialViewingDate || new Date());
    const countWeeksInMonth = getWeeksInMonth(viewingDate);

    const params = { countWeeksInMonth, isLarge, borderRadius, size, useIncreasedScopeDay };
    const styles = useStyles({ ...params, ...styleProps });

    const [hoveredDay, setHoveredDay] = useState<Date | undefined>();
    const onSelectDay = (newDates?: SelectedDatesDatePicker) => {
        if (newDates) {
            onChange(newDates);
            setDates(newDates);
        }
    };

    const commonMonthBlockProps = {
        type,
        dates,
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
                disableYearChange={disableYearChange}
                size={size}
                borderRadius={borderRadius}
            />
            <div
                css={styles.content}
                className={cn('content', params)}
            >
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
            {withTime && !isDropdownOpened && (
                <FooterDatePicker
                    times={times}
                    setTimes={setTimes}
                    innerStyles={innerStyles}
                    type={type}
                    dates={dates}
                    size={size}
                    setDates={onSelectDay}
                    borderRadius={borderRadius}
                    startTimeText={texts?.startTime || 'Начало'}
                    endTimeText={texts?.endTime || 'Конец'}
                    selectedTimeLabel={texts?.time || 'Время'}
                    errorValidateTime={texts?.errorValidateTime || 'Некорректное время'}
                    key="FooterDatePicker"
                />
            )}
        </div>
    );
});
