import { Link, LinkProps, LinkSize } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const SIZES: LinkSize[] = [
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
];

export const SizesStory: StoryFn<LinkProps> = (props) => DisplayVariants({
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
