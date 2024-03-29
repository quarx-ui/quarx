import React, { Ref, useEffect, useMemo, useRef, useState } from 'react';
import {
    useMedia,
    usePropsOverwrites,
} from '@core';
import { forwardRef } from '@core/utils';
import { addMonths, getWeeksInMonth } from 'date-fns';
import { DatePickerRightSection } from '@core/components/experimental';
import {
    useEditablePeriodPartManager,
} from './utils/useEditablePeriodPartManager';
import { TIMES_TO_TIME_BADGES, useDropdownDatePicker } from './utils';
import { MonthBlock, HeaderDatePicker, DROPDOWN_TYPES, DatePickerDropdown, FooterDatePicker } from '.';
import { getTimeFromDate } from './components/FooterDatePicker/utils';
import { isPeriod, isPicker, DatePickerBlockProps, SelectedDates } from './types';
import { useStyles } from './styles';
import { DEFAULT_TEXTS, DATE_PICKER_DISPLAY_TYPES } from './constants';

export const DatePickerBlock = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerBlockProps<D>, ref: Ref<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePickerBlock', initialProps);

    const {
        onChange, innerStyles, bigPressScope: externalUseIncreasedDay = false,
        selected, allowedDates, viewingDate: externalViewingDate, locale,
        display = DATE_PICKER_DISPLAY_TYPES.SINGLE, borderRadius = 'small', size = 'large', texts, yearsArr, withTime,
        withSeconds = false, disableYearChanging, useTimeBadges = false, timesToTimeBadges = TIMES_TO_TIME_BADGES,
        clearAllAfterChangingStartDate = true, pickNewSelectedAfterEndDatePick = true,
        editablePartOfPeriod: externalEditablePartOfPeriod,
        onChangeEditablePartOfPeriod: externalOnChangeEditablePartOfPeriod,
        periodChangingFlow: externalPeriodChangingFlow, ...restProps
    } = props;

    const isLarge = useMemo(() => display === DATE_PICKER_DISPLAY_TYPES.DOUBLE, [display]);
    const isMobile = useMedia('mobile');
    const bigPressScope = externalUseIncreasedDay || isMobile;

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

    const [viewingDate, setViewingDate] = useState<Date>(externalViewingDate || new Date());

    const { editablePartOfPeriod, onChangeEditablePartOfPeriod, periodChangingFlow } = useEditablePeriodPartManager({
        editablePartOfPeriod: externalEditablePartOfPeriod,
        onChangeEditablePartOfPeriod: externalOnChangeEditablePartOfPeriod,
        periodChangingFlow: externalPeriodChangingFlow,
        useTimeBadges,
        display,
        selected,
    });

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
            if (isPeriod(selected)) {
                setStartTime(getTimeFromDate(selected.start));
                setEndTime(getTimeFromDate(selected.end));
            } else if (isPicker(selected)) {
                setPickedTime(getTimeFromDate(selected));
            }
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
        bigPressScope,
        locale,
        editablePartOfPeriod,
        onChangeEditablePartOfPeriod,
        periodChangingFlow,
        clearAllAfterChangingStartDate,
        pickNewSelectedAfterEndDatePick,
    };

    return (
        <div
            {...restProps}
            className={cn('root', params)}
            css={styles.root}
            ref={ref}
            onMouseLeave={(e) => {
                setHoveredDay(undefined);
                restProps?.onMouseLeave?.(e);
            }}
        >
            <div
                css={styles.content}
                className={cn('content')}
            >
                <div
                    css={styles.leftContent}
                    className={cn('leftContent')}
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
                        key="DatePickerRightSection"
                        size={size}
                        borderRadius={borderRadius}
                        countWeeksInMonth={countWeeksInMonth}
                        timeText={texts?.time || 'Время'}
                        selected={selected}
                        onChange={onChange}
                        times={times}
                        setTimes={setTimes}
                        periodChangingFlow={periodChangingFlow}
                        editablePartOfPeriod={editablePartOfPeriod}
                        onChangeEditablePartOfPeriod={onChangeEditablePartOfPeriod}
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
                    withSeconds={withSeconds}
                    onChange={onSelectDay}
                    borderRadius={borderRadius}
                    startTimeText={texts?.startTime || DEFAULT_TEXTS.start}
                    endTimeText={texts?.endTime || DEFAULT_TEXTS.end}
                    selectedTimeLabel={texts?.time || DEFAULT_TEXTS.time}
                    errorValidateTime={texts?.errorValidateCalendarTime || DEFAULT_TEXTS.errorValidateCalendarTime}
                    key="FooterDatePicker"
                />
            )}
        </div>
    );
});
