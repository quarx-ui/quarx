import { Link, LinkProps, LinkUnderline } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
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

UnderlinesStory.storyName = 'Подчеркивания';
UnderlinesStory.parameters = createStoryDescription(description);
UnderlinesStory.argTypes = excludeProp([
    'showLeftItem',
    'showRightItem',
    'underline',
]);
