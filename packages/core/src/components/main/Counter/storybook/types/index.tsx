import { Counter, CounterProps, CounterType } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const TYPES: CounterType[] = [
    'filled',
    'ghosted',
    'white',
];

export const TypesStory: Story<CounterProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Counter,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
