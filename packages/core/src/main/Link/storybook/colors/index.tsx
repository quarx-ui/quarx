import { Link, LinkColor, LinkProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const COLORS: LinkColor[] = [
    'brand',
    'secondary',
    'info',
    'warning',
    'danger',
];

export const ColorsStory: Story<LinkProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: Link,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['showLeftItem', 'showRightItem', 'color'],
});
