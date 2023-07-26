import { Story } from '@storybook/react/types-6-0';
import { Headline, HeadlineProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const SandboxStory: Story<HeadlineProps> = ({ ...props }) => (
    <Headline {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});