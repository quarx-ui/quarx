import { Link, LinkProps, LinkSize } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
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

SizesStory.storyName = 'Размеры';
SizesStory.parameters = createStoryDescription(description);
SizesStory.argTypes = excludeProp([
    'showLeftItem',
    'showRightItem',
    'size',
]);
