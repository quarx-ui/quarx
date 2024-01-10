import { format, getDate, isSameMonth } from 'date-fns';
import { ForwardedRef, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { DATE_PICKER_TIME_TYPES, SelectedDates } from '@core/components/experimental';
import {
    mergeDateWithSelected,
    useDayProperties,
} from '../../utils';
import { DayBlockProps } from './types';
import { isPicker } from '../../types';
import { useStyles } from './styles';

export const DayBlock = forwardRef(<D extends SelectedDates>(initialProps: DayBlockProps<D>,
    ref: ForwardedRef<HTMLDivElement>) => {
    const { styleProps, props, cn } = usePropsOverwrites('DayBlock', initialProps);
    const { onChange, selected, innerStyles,
        viewingDate, allowedDates, hoveredDay, setHoveredDay, times, bigPressScope,
        setTimes, currentDay, size, borderRadius, numDay, isLarge,
        periodChangingFlow, editablePartOfPeriod, onChangeEditablePartOfPeriod,
        clearAllAfterChangingStartDate,
        pickNewSelectedAfterEndDatePick,
    } = props;

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
        isDayInPeriodLarge } = useDayProperties<D>({
        day: currentDay,
        selected,
        hoveredDay,
        viewingDate,
        allowedDates,
    });

    const onSelectDay = (item: Date) => {
        if (isDayTrusted) {
            onChange(mergeDateWithSelected<D>(
                item, times, setTimes, selected, periodChangingFlow, editablePartOfPeriod, onChangeEditablePartOfPeriod,
                clearAllAfterChangingStartDate, pickNewSelectedAfterEndDatePick,
            ));
        }
        if (isPicker(selected)) {
            setHoveredDay?.(undefined);
        }
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
        bigPressScope,
        type: isPicker(selected) ? DATE_PICKER_TIME_TYPES.PICKER : DATE_PICKER_TIME_TYPES.PERIOD,
        isLarge,
    };

    const styles = useStyles({ params, ...styleProps, overwritesStyles: innerStyles?.day });

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            onClick={bigPressScope ? () => onSelectDay(currentDay) : undefined}
            onMouseEnter={() => {
                if (isDayTrusted && (isLarge ? isSameMonth(currentDay, viewingDate) : true) && bigPressScope) {
                    setHoveredDay?.(currentDay);
                }
            }}
            ref={ref}
        >
            <div
                css={styles.dayContainer}
                className={cn('dayContainer')}
                onMouseEnter={() => {
                    if (isDayTrusted && (isLarge ? isSameMonth(currentDay, viewingDate) : true)
                        && !bigPressScope) {
                        setHoveredDay?.(currentDay);
                    }
                }}
            >
                <button
                    type="button"
                    css={styles.day}
                    className={cn('day')}
                    key={format(currentDay, 'dd-MM-yyyy')}
                    onClick={!bigPressScope ? () => onSelectDay(currentDay) : undefined}
                >
                    <time dateTime={format(currentDay, 'yyyy-MM-dd HH:mm')}>
                        {getDate(currentDay)}
                    </time>
                </button>
            </div>
        </div>
    );
});
