import { Counter, CounterProps, CounterSize } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

const SIZES: CounterSize[] = [
    'small',
    'medium',
    'large',
];

export const SizesStory: Story<CounterProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Counter,
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
