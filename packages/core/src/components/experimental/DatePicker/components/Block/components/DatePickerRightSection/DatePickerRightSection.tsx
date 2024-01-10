import { forwardRef } from '@core/utils';
import React, { ForwardedRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { SelectedDates } from '@core/components/experimental';
import { TimeBadge } from '@core/components/experimental/DatePicker/components/Block/components/TimeBadge';
import { useStyles } from './styles';
import { DatePickerRightSectionProps } from './types';
import { getSelectedTimeWithoutSeconds } from './utils';

export const DatePickerRightSection = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerRightSectionProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePickerRightSection', initialProps);
    const { timesToTimeBadges, size, borderRadius, timeText, countWeeksInMonth,
        setTimes, innerStyles: externalStyles,
        onChange, selected, times, editablePartOfPeriod, periodChangingFlow,
        onChangeEditablePartOfPeriod, ...restProps } = props;
    const params = { size, countWeeksInMonth };
    const styles = useStyles({
        params,
        ...styleProps,
        overwritesStyles: externalStyles?.datePickerRightSection,
    });

    return (
        <div
            {...restProps}
            ref={ref}
            css={styles.root}
            className={cn('root', params)}
        >
            <div
                css={styles.header}
                className={cn('header')}
            >
                <div
                    css={styles.headerText}
                    className={cn('headerText')}
                >
                    {timeText}
                </div>
            </div>
            <div
                css={styles.badges}
                className={cn('badges')}
            >
                {timesToTimeBadges.map((item) => (
                    <TimeBadge
                        time={item}
                        setTimes={setTimes}
                        onChange={onChange}
                        active={getSelectedTimeWithoutSeconds(times, selected, editablePartOfPeriod) === item}
                        selected={selected}
                        borderRadius={borderRadius}
                        size={size}
                        innerStyles={externalStyles}
                        editablePartOfPeriod={editablePartOfPeriod}
                        periodChangingFlow={periodChangingFlow}
                        onChangeEditablePartOfPeriod={onChangeEditablePartOfPeriod}
                    />
                ))}
            </div>
        </div>
    );
});
