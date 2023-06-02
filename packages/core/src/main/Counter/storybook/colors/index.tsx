import { Counter, CounterColor, CounterProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';

const COLORS: CounterColor[] = [
    'brand',
    'secondary',
    'warning',
    'danger',
    'info',
    'text',
];

export const ColorsStory: Story<CounterProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: Counter,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    excludeArgs: ['color'],
});
