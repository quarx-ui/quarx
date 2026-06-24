import { StoryFn } from '@storybook/react-vite';
import { Headline, HeadlineProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<HeadlineProps> = ({ ...props }) => (
    <Headline {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
