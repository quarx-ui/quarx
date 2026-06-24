import { StoryFn } from '@storybook/react-vite';
import { Text, TextProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<TextProps> = ({ ...props }) => (
    <Text {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
