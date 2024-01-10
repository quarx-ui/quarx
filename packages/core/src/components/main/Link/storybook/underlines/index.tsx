import { Link, LinkProps, LinkUnderline } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const UNDERLINES: LinkUnderline[] = [
    'always',
    'hover',
    'none',
];

export const UnderlinesStory: Story<LinkProps> = (props) => DisplayVariants({
    property: 'underline',
    values: UNDERLINES,
    component: Link,
    componentProps: props,
});

setStoryParams(UnderlinesStory, {
    title: 'Подчеркивания',
    description,
    excludeArgs: ['showLeftItem', 'showRightItem', 'underline'],
});
