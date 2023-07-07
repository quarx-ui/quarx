import { ForwardedRef, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { SelectedDates } from '@core/src/experimental';
import { useDayProperties } from '../../utils';
import { useStyles } from './styles/index';
import { OffsetDayBlockProps } from './types';

export const OffsetDayBlock = forwardRef(<D extends SelectedDates>(
    initialProps: OffsetDayBlockProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('OffsetDayBlock', initialProps);

    const { numDay, size, day, isWeekdayName, isLarge,
        innerStyles: externalStyles, selected, hoveredDay, viewingDate,
        bigPressScope } = props;

    const { isDayInPeriod, isDayLastInPeriod, isEqualDays, isHoveredPeriod, isDayInPeriodLarge } = useDayProperties(
        { day, selected, hoveredDay, viewingDate },
    );
    const params = { isLarge,
        size,
        bigPressScope,
        isDayInPeriod,
        isDayLastInPeriod,
        isEqualDays,
        isHoveredPeriod,
        isWeekdayName,
        isDayInPeriodLarge,
    };
    const styles = useStyles({
        params,
        ...styleProps,
        overwritesStyles: externalStyles?.offsetDay,
    });
    if (numDay === 0) {
        return null;
    }
    return (<div css={styles.root} className={cn('root', params)} ref={ref} />);
});
