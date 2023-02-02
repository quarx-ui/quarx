import { Counter, CounterProps, CounterType } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

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

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
