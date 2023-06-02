import { Story } from '@storybook/react/types-6-0';
import { Counter, CounterProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const SandboxStory: Story<CounterProps> = (props) => (
    <Counter {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
