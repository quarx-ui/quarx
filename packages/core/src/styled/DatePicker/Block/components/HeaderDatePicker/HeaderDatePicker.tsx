/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ForwardedRef, forwardRef } from 'react';
import { addMonths, format, getMonth, getYear } from 'date-fns';
import { IconButton, DropdownDatePickerTypes, usePropsOverwrites } from '@core';
import { scrollParentToChild } from '../../utils';
import { LeftArrowBigIcon, LeftArrowSmallIcon } from '../../assets';
import {
    HeaderDatePickerProps,
} from './types';
import { HeaderDropdownDatePicker, DROPDOWN_TYPES } from '..';
import { useStyles } from './styles';

export const HeaderDatePicker = forwardRef((
    initialProps : HeaderDatePickerProps,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn } = usePropsOverwrites('HeaderDatePicker', initialProps);
    const {
        innerStyles: externalStyles,
        dropdownData: {
            monthDropdownData,
            yearDropdownData,
        },
        viewingDate,
        setViewingDate,
        refDropdown,
        isLarge,
        size,
        disableYearChange,
        borderRadius,
    } = props;

    const params = { size };

    const styles = useStyles({ ...params, styles: externalStyles?.header });

    const onOpenDropdown = (dropdownType: DropdownDatePickerTypes) => {
        if (dropdownType === DROPDOWN_TYPES.MONTHS) {
            yearDropdownData.setIsOpen(false);
            monthDropdownData.setIsOpen(!monthDropdownData.isOpen);
        } else if (dropdownType === DROPDOWN_TYPES.YEARS) {
            monthDropdownData.setIsOpen(false);
            yearDropdownData.setIsOpen(!yearDropdownData.isOpen);
        }

        const refCurrentItem = dropdownType === DROPDOWN_TYPES.MONTHS ? monthDropdownData.ref : yearDropdownData.ref;

        setTimeout(() => {
            if (refDropdown && refCurrentItem) {
                scrollParentToChild(
                    refDropdown.current,
                    refCurrentItem.current,
                );
            }
        }, 0);
    };

    const currentMonth = monthDropdownData.content[getMonth(viewingDate)];
    const nextMonth = monthDropdownData.content[getMonth(addMonths(viewingDate, 1))];
    const currentYear = yearDropdownData.content[
        yearDropdownData.content.indexOf(getYear(viewingDate) || String(getYear(viewingDate)))
    ];
    const nextYear = yearDropdownData.content[
        yearDropdownData.content.indexOf(getYear(addMonths(viewingDate, 1))
            || String(getYear(addMonths(viewingDate, 1))))
    ];
    const SizedIcon = size && ['large', 'medium'].includes(size) ? LeftArrowBigIcon : LeftArrowSmallIcon;

    if (isLarge) {
        return (
            <div css={styles.headerLarge} ref={ref} className={cn('headerLarge', params)}>
                <IconButton
                    type="text"
                    size={size}
                    onClick={() => {
                        setViewingDate((prevState) => addMonths(prevState, -1));
                    }}
                >
                    <SizedIcon />
                </IconButton>
                <div css={styles.headerMonthContainer} className={cn('headerMonthContainer', params)}>
                    <div css={styles.headerMonth} className={cn('headerMonth', params)}>
                        {currentMonth && currentYear ? `${currentMonth} ${currentYear}`
                            : format(viewingDate, 'LLLL yyyy')}
                    </div>
                    <div css={styles.headerMonth} className={cn('headerMonth', params)}>
                        {currentMonth && currentYear ? `${nextMonth} ${nextYear}`
                            : format(addMonths(viewingDate, 1), 'LLLL yyyy')}
                    </div>
                </div>
                <IconButton
                    type="text"
                    size={size}
                    onClick={() => {
                        setViewingDate((prevState) => addMonths(prevState, 1));
                    }}
                >
                    <SizedIcon css={styles.rotateLeftIcon} />
                </IconButton>
            </div>
        );
    }

    return (
        <div css={styles.header} ref={ref} className={cn('header', params)}>
            <HeaderDropdownDatePicker
                onOpenDropdown={() => onOpenDropdown(DROPDOWN_TYPES.MONTHS)}
                isOpen={monthDropdownData.isOpen}
                type={DROPDOWN_TYPES.MONTHS}
                innerStyles={externalStyles}
                viewingDate={viewingDate}
                currentDropdown={currentMonth}
                borderRadius={borderRadius}
                key="headerDropdown_MONTHS"
            />
            <HeaderDropdownDatePicker
                onOpenDropdown={() => onOpenDropdown(DROPDOWN_TYPES.YEARS)}
                isOpen={yearDropdownData.isOpen}
                type={DROPDOWN_TYPES.YEARS}
                innerStyles={externalStyles}
                viewingDate={viewingDate}
                currentDropdown={currentYear}
                disable={disableYearChange}
                borderRadius={borderRadius}
                key="headerDropdown_YEARS"
            />
        </div>
    );
});
