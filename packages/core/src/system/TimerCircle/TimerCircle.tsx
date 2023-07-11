import { Fragment, FC, useMemo, forwardRef } from 'react';
import { usePropsOverwrites, useTimer } from '@core';
import { If } from '@core/src/system/If';
import { CIRCLE_RADIUS, CIRCLE_SIZE, MIN_OFFSET } from './constants';
import { useStyles } from './styles';
import { TimerCircleProps } from './types';
import { useRequestAnimationTimer } from './helpers';

export const TimerCircle: FC<TimerCircleProps> = forwardRef<HTMLDivElement, TimerCircleProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('TimerCircle', initialProps);

    const {
        circleSegments = 5,
        value: externalValue,

        startTime = circleSegments,
        endTime = 0,
        interval = 1,
        disabled = Boolean(externalValue),
        onStart,
        onFinish,

        hidden,

        ...htmlProps
    } = props;

    const params = {
        interval,
    };

    const styles = useStyles({ params, ...styleProps });

    // const { value: innerValue, pause } = useTimer({
    //     startTime,
    //     endTime,
    //     interval,
    //     disabled,
    //     onStart,
    //     onFinish,
    // });

    // useEffect(() => {
    //     if (disabled) {
    //         pause();
    //     }
    // }, [disabled, pause]);

    // const timerValue = externalValue ?? /* innerValue */ 0;
    const { targetRef, value, offset } = useRequestAnimationTimer({
        interval,
        startTime,
        endTime,
        circleSegments,
        disabled,
    });

    const content = useMemo(() => (
        Number.isFinite(value)
            ? (value ?? '')
            : <Fragment>&infin;</Fragment>
    ), [value]);

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
                        ref={targetRef}
                        dominantBaseline="middle"
                        fill="none"
                        strokeWidth={2.5}
                        r={CIRCLE_RADIUS}
                        stroke="currentColor"
                        strokeDasharray={MIN_OFFSET}
                        strokeDashoffset={offset}
                        css={styles.loaderBorder}
                        className={cn('loaderBorder')}
                    />
                </svg>
            </div>
        </If>
    );
});
