import { StoryFn } from '@storybook/react';
import { TimerCircle, TimerCircleProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<TimerCircleProps> = (props) => (
    <TimerCircle {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
