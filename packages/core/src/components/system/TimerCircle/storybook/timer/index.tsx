import { StoryFn } from '@storybook/react';
import { TimerCircle, TimerCircleProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

export const TimerStory: StoryFn<TimerCircleProps> = (props) => (
    <TimerCircle
        {...props}
        value={undefined}
    />
);
setStoryParams(TimerStory, {
    title: 'Использование с таймером',
    description,
});
