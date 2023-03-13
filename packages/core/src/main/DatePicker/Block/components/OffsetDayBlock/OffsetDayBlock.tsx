import { ForwardedRef, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { DatePickerTimeTypes, PickedDatesDatePicker } from '@core/src';
import { useDayProperties } from '../../utils';
import { useStyles } from './styles';
import { OffsetDayBlockProps } from './types';

export const OffsetDayBlock = forwardRef(<T extends DatePickerTimeTypes, D extends PickedDatesDatePicker>(
    initialProps: OffsetDayBlockProps<T, D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('OffsetDayBlock', initialProps);

    const { numDay, size, day, isWeekdayName, isLarge,
        innerStyles: externalStyles, dates, type, hoveredDay, viewingDate,
        useIncreasedScopeDay } = props;

    const { isDayInPeriod, isDayLastInPeriod, isEqualDays, isHoveredPeriod, isDayInPeriodLarge } = useDayProperties(
        { day, dates, type, hoveredDay, viewingDate },
    );
    const params = { isLarge,
        size,
        useIncreasedScopeDay,
        isDayInPeriod,
        isDayLastInPeriod,
        isEqualDays,
        isHoveredPeriod,
        isWeekdayName,
        isDayInPeriodLarge };
    const styles = useStyles({
        ...params,
        ...styleProps,
        styles: { ...externalStyles?.offsetDay, ...styleProps.styles },
    });
    if (numDay === 0) {
        return null;
    }
    if (isWeekdayName && !isLarge) {
        return <div css={styles.offsetWeekdayName} ref={ref} className={cn('offsetWeekdayName', params)} />;
    }
    return (<div css={styles.offsetDay} className={cn('offsetDay', params)} ref={ref} />);
});
