import { forwardRef } from '@core/utils';
import React, { ForwardedRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { SelectedDates } from '@core/src';
import { TimeBadge } from '@core/src/main/DatePicker/components/Block/components/TimeBadge';
import { useStyles } from './styles';
import { DatePickerRightSectionProps } from './types';
import { getSelectedTimeWithoutSeconds } from './utils';

export const DatePickerRightSection = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerRightSectionProps<D>, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('DatePickerRightSection', initialProps);
    const { timesToTimeBadges, size, borderRadius, timeText, countWeeksInMonth,
        setTimes, innerStyles: externalStyles,
        onChange, selected, times, editablePartOfPeriod, periodChangingFlow, onChangeEditablePartOfPeriod } = props;
    const params = { size, countWeeksInMonth };
    const classes = useStyles({
        params,
        ...styleProps,
        styles: {
            ...externalStyles?.datePickerRightSection,
            ...styleProps.styles,
        } });

    return (
        <div
            ref={ref}
            css={classes.root}
            className={cn('root')}
        >
            <div
                css={classes.header}
                className={cn('header')}
            >
                <div
                    css={classes.headerText}
                    className={cn('headerText')}
                >
                    {timeText}
                </div>
            </div>
            <div
                css={classes.badges}
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
