import { StoryFn } from '@storybook/react-vite';
import { Stack, StackProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<StackProps> = ({ ...props }) => (
    <Stack {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
