import { StoryFn } from '@storybook/react';
import { Button, TimerCircle, TimerCircleProps, useBooleanState } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { Fragment, useState } from 'react';
import description from './description.md';

export const TimerStory: StoryFn<TimerCircleProps> = (props) => {
    const [disabled, { toggleState }] = useBooleanState(false);

    return (
        <Fragment>
            <TimerCircle
                {...props}
                circleSegments={10}
                value={undefined}
                startTime={15}
                disabled={disabled}
            // interval={2}
            // endTime={5}
            />
            <Button onClick={toggleState}>{disabled ? 'Enable' : 'Disable'}</Button>
        </Fragment>
    );
};
setStoryParams(TimerStory, {
    title: 'Использование с таймером',
    description,
});
