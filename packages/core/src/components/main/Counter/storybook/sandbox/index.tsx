import { StoryFn } from '@storybook/react-vite';
import { Counter, CounterProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<CounterProps> = (props) => (
    <Counter {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
