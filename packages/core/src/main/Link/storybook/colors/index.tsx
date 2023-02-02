import { Link, LinkColor, LinkProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
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

ColorsStory.storyName = 'Цвета';
ColorsStory.parameters = createStoryDescription(description);
ColorsStory.argTypes = excludeProp([
    'showLeftItem',
    'showRightItem',
    'color',
]);