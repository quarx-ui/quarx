import { Fragment, FC, useMemo, useEffect, forwardRef } from 'react';
import { usePropsOverwrites, useTimer } from '@core';
import { If } from '@core/components/system/If';
import { CIRCLE_RADIUS, CIRCLE_SIZE, MIN_OFFSET } from './constants';
import { useStyles } from './styles';
import { TimerCircleProps } from './types';
import { getOffset } from './helpers';

export const TimerCircle: FC<TimerCircleProps> = forwardRef<HTMLDivElement, TimerCircleProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('TimerCircle', initialProps);

    const {
        circleSegments = 5,
        value: externalValue,

        startTime = circleSegments,
        endTime,
        interval,
        disabled = Boolean(externalValue),
        onStart,
        onFinish,

        hidden,

        ...htmlProps
    } = props;

    const styles = useStyles(styleProps);

    const { value: innerValue, pause } = useTimer({
        startTime,
        endTime,
        interval,
        disabled,
        onStart,
        onFinish,
    });

    useEffect(() => {
        if (disabled) {
            pause();
        }
    }, [disabled, pause]);

    const timerValue = externalValue ?? innerValue;
    const currentOffset = getOffset(timerValue, circleSegments);

    const content = useMemo(() => (
        Number.isFinite(timerValue)
            ? (timerValue ?? '')
            : <Fragment>&infin;</Fragment>
    ), [timerValue]);

    return (
        <If condition={!hidden}>
            <div
                css={styles.root}
                className={cn('root')}
                ref={ref}
                {...htmlProps}
            >
                <svg
                    width={CIRCLE_SIZE}
                    height={CIRCLE_SIZE}
                    viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <text
                        x="50%"
                        y="52%"
                        dominantBaseline="middle"
                        fill="currentColor"
                        textAnchor="middle"
                        css={styles.label}
                        className={cn('label')}
                    >
                        {content}
                    </text>
                    <circle
                        cy="50%"
                        cx="50%"
                        dominantBaseline="middle"
                        fill="none"
                        strokeWidth={2.5}
                        r={CIRCLE_RADIUS}
                        css={styles.loaderBackground}
                        className={cn('loaderBackground')}
                    />
                    <circle
                        cy="50%"
                        cx="50%"
                        dominantBaseline="middle"
                        fill="none"
                        strokeWidth={2.5}
                        r={CIRCLE_RADIUS}
                        stroke="currentColor"
                        strokeDasharray={MIN_OFFSET}
                        strokeDashoffset={currentOffset}
                        css={styles.loaderBorder}
                        className={cn('loaderBorder')}
                    />
                </svg>
            </div>
        </If>
    );
});
