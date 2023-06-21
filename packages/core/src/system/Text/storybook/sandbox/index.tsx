import { Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const SandboxStory: Story<TextProps> = ({ ...props }) => (
    <Text {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
