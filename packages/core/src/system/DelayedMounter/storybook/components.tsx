import styled from '@emotion/styled';
import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from 'react';
import { DelayedMounter } from '../DelayedMounter';
import { DelayedMounterProps } from '../types';

export const FlexContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

export const FlexRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
});

export const MounterContent = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'aliceblue',
    width: 200,
    height: 200,
    borderRadius: 4,
    marginTop: 20,
});

export const useDelayedMounterStoryState = (timeout: number) => {
    const [mounted, setMounted] = useState(false);
    const [isUnmounting, setIsUnmounting] = useState(false);
    const [leftTime, setLeftTime] = useState(timeout ?? 250);
    const timerId = useRef<ReturnType<typeof setInterval>>();

    return {
        mounted,
        setMounted,
        isUnmounting,
        setIsUnmounting,
        leftTime,
        setLeftTime,
        timerId,
    };
};

export interface CreateDelayedMounterProps extends DelayedMounterProps {
    timeout: number;

    timerId: MutableRefObject<ReturnType<typeof setInterval> | undefined>;

    leftTime: number;

    setLeftTime: Dispatch<SetStateAction<number>>;

    setIsUnmounting(val: boolean): void;
}

export const createDelayedMounter = ({
    timerId,
    leftTime,
    setLeftTime,
    setIsUnmounting,

    children,
    mounted,
    disableTimeout,
    timeout,
    ...props
}: CreateDelayedMounterProps) => (
    <DelayedMounter
        mounted={mounted}
        disableTimeout={disableTimeout}
        timeout={timeout}
        onEnter={() => setLeftTime(timeout)}
        onExitStart={() => {
            if (disableTimeout) { return; }

            setIsUnmounting(true);
            const intervalDecrement = 10;

            // eslint-disable-next-line no-param-reassign
            timerId.current = setInterval(() => {
                setLeftTime((prevLeftTime) => {
                    if (prevLeftTime <= intervalDecrement) {
                        return 0;
                    }

                    return prevLeftTime - intervalDecrement;
                });
            }, intervalDecrement);
        }}
        onExit={() => {
            setIsUnmounting(false);

            if (timerId.current) {
                clearInterval(timerId.current);
            }
        }}
        {...props}
    >
        {children ?? (
            <MounterContent>
                {leftTime}
            </MounterContent>
        )}
    </DelayedMounter>
);
