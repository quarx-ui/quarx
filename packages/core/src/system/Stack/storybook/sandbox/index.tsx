import { Story } from '@storybook/react/types-6-0';
import { Stack, StackProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const SandboxStory: Story<StackProps> = ({ ...props }) => (
    <Stack {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
