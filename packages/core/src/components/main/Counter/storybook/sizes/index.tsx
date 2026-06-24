import { Counter, CounterProps, CounterSize } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const SIZES: CounterSize[] = [
    'small',
    'medium',
    'large',
];

export const SizesStory: StoryFn<CounterProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Counter,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
