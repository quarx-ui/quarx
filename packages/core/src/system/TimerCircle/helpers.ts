import { useCallback, useRef, useState } from 'react';
import { useRequestAnimationFrame } from '@core';
import { MAX_OFFSET, MIN_OFFSET } from './constants';

export const getOffset = (current: number, segments: number): number => {
    const percent = current / segments;
    // console.log(current, segments);
    return Math.round(
        (MAX_OFFSET - MIN_OFFSET) * percent + MIN_OFFSET,
    );
};

const setOffsetToCircle = (element: SVGCircleElement | null, value: number) => {
    if (element) {
        element.setAttribute('stroke-dashoffset', String(value));
    }
};

interface UseRequestAnimationTimerOptions {
    circleSegments?: number;
    startTime?: number;
    endTime?: number;
    interval?: number;
    disabled?: boolean;
}

export const useRequestAnimationTimer = (options: UseRequestAnimationTimerOptions) => {
    const {
        circleSegments = 5,
        startTime = circleSegments,
        endTime = 0,
        interval = 1,
        disabled = false,
    } = options;

    const currentOffset = useRef<number>(MAX_OFFSET);
    const startTimeStamp = useRef<number | null>(null);
    const targetRef = useRef<SVGCircleElement>(null);
    const [currentValue, setCurrentValue] = useState(circleSegments);

    const animate: FrameRequestCallback = (timeStamp) => {
        if (!targetRef.current || disabled) {
            return;
        }
        if (!startTimeStamp.current) {
            startTimeStamp.current = timeStamp;
        }
        console.log(disabled);

        const delta = (timeStamp - startTimeStamp.current) / (1000 * interval);
        const remainder = startTime - delta;
        const done = delta + endTime >= startTime;
        // console.log(delta);

        currentOffset.current = getOffset(remainder, circleSegments);

        setCurrentValue(Math.ceil(remainder));
        setOffsetToCircle(targetRef.current, currentOffset.current);

        if (!done) {
            window.requestAnimationFrame(animate);
        }
    };

    useRequestAnimationFrame(animate);

    return {
        targetRef,
        value: currentValue,
        offset: currentOffset.current,
    };
};
