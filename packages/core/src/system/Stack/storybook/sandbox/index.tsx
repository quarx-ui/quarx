import { Story } from '@storybook/react/types-6-0';
import { Stack, StackProps } from '@core';

export const SandboxStory: Story<StackProps> = ({ ...props }) => (
    <Stack {...props} />
);
SandboxStory.storyName = 'Компонент';
