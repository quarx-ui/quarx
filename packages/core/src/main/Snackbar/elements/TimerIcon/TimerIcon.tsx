import { Fragment, FC, useMemo } from 'react';
import { useProps } from '@core';
import { useStyles } from './styles';
import { TimerIconProps } from './types';

export const TimerIcon: FC<TimerIconProps> = (initialProps) => {
    const { cn, props, styleProps } = useProps('TimerIcon', initialProps);

    const {
        initialTimerValue = 5,
        timerValue,

        ...htmlProps
    } = props;

    const styles = useStyles(styleProps);

    const seconds = timerValue ?? initialTimerValue;
    const circleRadius = 12;
    const minOffset = Math.round(2 * Math.PI * circleRadius);
    const maxOffset = minOffset * 2;
    const getOffsetPercent = (current: number): number => current / (initialTimerValue - 1);
    const getOffset = (percent: number): number => Math.round((maxOffset - minOffset) * percent + minOffset);
    const currentOffset = getOffset(getOffsetPercent(seconds === 0 ? seconds : seconds - 1));

    const content = useMemo(() => {
        if (!Number.isFinite(timerValue)) {
            return <Fragment>&infin;</Fragment>;
        }

        return timerValue || timerValue === 0 ? seconds : '';
    }, [seconds, timerValue]);

    return (
        <div
            css={styles.root}
            className={cn('root')}
            {...htmlProps}
        >
            <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x={20}
                    y="62.5%"
                    fill="currentColor"
                    textAnchor="middle"
                    css={styles.label}
                    className={cn('label')}
                >
                    {content}
                </text>
                <circle
                    cy={20}
                    cx={20}
                    fill="none"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    r={circleRadius}
                    css={styles.loaderBackground}
                    className={cn('loaderBackground')}
                />
                <circle
                    cy={20}
                    cx={20}
                    fill="none"
                    strokeWidth={2.5}
                    r={circleRadius}
                    stroke="currentColor"
                    strokeDasharray={minOffset}
                    strokeDashoffset={currentOffset}
                    css={styles.loaderBorder}
                    className={cn('loaderBorder')}
                />
            </svg>
        </div>
    );
};
