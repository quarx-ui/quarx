import { Counter, CounterProps, CounterType } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const TYPES: CounterType[] = [
    'filled',
    'ghosted',
    'white',
];

export const TypesStory: StoryFn<CounterProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Counter,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
