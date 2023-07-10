import { useCallback, useRef, useState } from 'react';
import { useBooleanState, useEnhancedEffect } from '@core/utils';
import { END_TIME, RERENDER_VALUES, START_TIME, STEP, TIME_SCALE } from './constants';
import { UseTimerOptions, UseTimerReturn } from './types';

export const useTimer = (options: UseTimerOptions = {}): UseTimerReturn => {
    const {
        startTime: defaultStartTime = START_TIME,
        endTime = END_TIME,

        timeScale = TIME_SCALE,
        interval = STEP,

        loop = false,
        rerenderOn = RERENDER_VALUES.step,
        disabled = false,

        onStart,
        onPause,
        onResume,
        onFinish,
    } = options;

    const intervalId = useRef<ReturnType<typeof setInterval>>();
    const isFinished = useRef(disabled);

    const [startTime, setInnerStartTime] = useState(defaultStartTime);
    const [, { toggleState: rerender }] = useBooleanState(false);

    const timerValue = useRef(startTime);

    const applyRerender = useCallback(() => {
        if (disabled) { return; }

        if (rerenderOn === RERENDER_VALUES.step || timerValue.current === endTime) {
            rerender();
        }
    }, [disabled, endTime, rerender, rerenderOn]);

    const clearTimer = useCallback(() => {
        if (!intervalId.current) { return; }

        clearInterval(intervalId.current);
        intervalId.current = undefined;
    }, []);

    const pause: UseTimerReturn['pause'] = useCallback(() => {
        clearTimer();

        if (isFinished.current) { return; }

        onPause?.();
    }, [clearTimer, onPause]);

    const decrementTimer = useCallback((prevState: number) => {
        const currentValue = Number(
            (prevState - interval).toFixed(2),
        );

        isFinished.current = currentValue <= endTime;

        if (!isFinished.current) { return currentValue; }
        if (loop) { return startTime; }

        clearTimer();

        onFinish?.();

        return endTime;
    }, [interval, endTime, onFinish, loop, clearTimer, startTime]);

    const updateTimer = useCallback(() => {
        timerValue.current = decrementTimer(timerValue.current);

        applyRerender();
    }, [decrementTimer, applyRerender]);

    const startTimer = useCallback(() => {
        if (intervalId.current || disabled) { return; }

        intervalId.current = setInterval(updateTimer, interval * timeScale);
    }, [disabled, interval, timeScale, updateTimer]);

    const resume: UseTimerReturn['resume'] = useCallback(() => {
        if (isFinished.current) { return; }

        setInnerStartTime(timerValue.current);
        startTimer();

        onResume?.();
    }, [onResume, startTimer]);

    const restart: UseTimerReturn['restart'] = useCallback(() => {
        timerValue.current = defaultStartTime;
        setInnerStartTime(defaultStartTime);
        startTimer();
        onStart?.();
    }, [defaultStartTime, onStart, startTimer]);

    useEnhancedEffect(() => {
        startTimer();
    }, [startTimer]);

    return {
        value: Number(timerValue.current.toFixed(2)),

        resume,
        pause,
        restart,
    };
};
