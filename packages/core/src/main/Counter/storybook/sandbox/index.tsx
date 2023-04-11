import { Story } from '@storybook/react/types-6-0';
import { Counter, CounterProps } from '@core';

const Template: Story<CounterProps> = (props) => (
    <Counter {...props} />
);

export const SandboxStory = Template.bind({});
SandboxStory.storyName = 'Компонент';
