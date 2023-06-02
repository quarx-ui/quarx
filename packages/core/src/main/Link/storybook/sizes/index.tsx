import { Link, LinkProps, LinkSize } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const SIZES: LinkSize[] = [
    'S',
    'M',
    'L',
    'XL',
];

export const SizesStory: Story<LinkProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Link,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['showLeftItem', 'showRightItem', 'size'],
});
