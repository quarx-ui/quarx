/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ForwardedRef, forwardRef } from 'react';
import { getMonth, getYear, setMonth, setYear } from 'date-fns';
import { usePropsOverwrites } from '@core/styles';
import { mergeRefs } from '@core/utils';
import {
    DatePickerDropdownProps,
    DROPDOWN_TYPES,
} from './types';
import { useStyles } from './styles';

export const DatePickerDropdown = forwardRef((
    initialProps: DatePickerDropdownProps, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn } = usePropsOverwrites('HeaderDatePicker', initialProps);
    const {
        styles: externalStyles,
        innerStyles,
        type,
        dropdownData,
        refDropdown,
        viewingDate,
        setViewingDate,
        size,
        countWeeksInMonth,
        ...restProps
    } = props;

    const params = { size, countWeeksInMonth };

    const styles = useStyles({ ...params, styles: { ...externalStyles, ...innerStyles?.dropdown } });

    const selectRefToItem = (item: number | string, index: number) => {
        if ((type === DROPDOWN_TYPES.YEARS && item === getYear(viewingDate))
            || (type === DROPDOWN_TYPES.MONTHS && index === getMonth(viewingDate))) {
            return dropdownData.ref;
        }
        return undefined;
    };

    return (
        <div
            {...restProps}
            css={styles.dropdown}
            ref={mergeRefs(refDropdown, ref)}
            className={cn('dropdown', params)}
        >
            {dropdownData.content.map((item, index) => (
                <div
                    css={styles.dropdownItem}
                    className={cn('dropdownItem', params)}
                    ref={selectRefToItem(item, index)}
                    onClick={() => {
                        if (type === DROPDOWN_TYPES.MONTHS) {
                            setViewingDate((prevState) => setMonth(prevState, index));
                        } else if (type === DROPDOWN_TYPES.YEARS) {
                            setViewingDate((prevState) => setYear(prevState, Number(item)));
                        }
                        dropdownData.setIsOpen(false);
                    }}
                    key={item}
                >
                    {item}
                </div>
            ))}
        </div>
    );
});