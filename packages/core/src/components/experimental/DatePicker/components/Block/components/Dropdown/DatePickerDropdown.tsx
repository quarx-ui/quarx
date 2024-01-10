import React, { ForwardedRef, forwardRef } from 'react';
import { getMonth, getYear, setMonth, setYear } from 'date-fns';
import { usePropsOverwrites } from '@core/styles';
import { mergeRefs } from '@core/utils';
import { SelectedDates } from '@core/components/experimental';
import {
    DatePickerDropdownProps,
    DROPDOWN_TYPES,
} from './types';
import { useStyles } from './styles';

export const DatePickerDropdown = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerDropdownProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePickerDropdown', initialProps);
    const {
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

    const styles = useStyles({ params, ...styleProps, overwritesStyles: innerStyles?.dropdown });

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
            css={styles.root}
            ref={mergeRefs(refDropdown, ref)}
            className={cn('root', params)}
        >
            {dropdownData.content.map((item, index) => (
                <div
                    css={styles.dropdownItem}
                    className={cn('dropdownItem')}
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
