import { Story } from '@storybook/react/types-6-0';
import React, { useRef, useState } from 'react';
import { StoryButton } from '@core/storybook/components';
import { DelayedMounter } from '@core';
import styled from '@emotion/styled';
import { StoryDelayedMounterProps } from './types';

const FlexContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

const MounterContent = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'aliceblue',
    width: 200,
    height: 200,
    borderRadius: 4,
    marginTop: 20,
});

export const Sandbox: Story<StoryDelayedMounterProps> = ({
    children,
    disableTimeout,
    timeout = disableTimeout ? 0 : 250,
    buttonText,
    ...props
}) => {
    const [mounted, setMounted] = useState(false);
    const [isUnmounting, setIsUnmounting] = useState(false);
    const [leftTime, setLeftTime] = useState(timeout ?? 250);
    const timerId = useRef<ReturnType<typeof setInterval>>();

    return (
        <FlexContainer>
            <StoryButton
                loading={isUnmounting}
                onClick={() => setMounted((prevState) => !prevState)}
            >
                {buttonText ?? (mounted
                    ? 'Скрыть'
                    : 'Показать')}
            </StoryButton>
            <DelayedMounter
                mounted={mounted}
                disableTimeout={disableTimeout}
                timeout={timeout}
                onEnter={() => setLeftTime(timeout)}
                onExitStart={() => {
                    if (disableTimeout) { return; }

                    setIsUnmounting(true);
                    const intervalDecrement = 10;

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
        </FlexContainer>
    );
};

Sandbox.storyName = 'Компонент';
