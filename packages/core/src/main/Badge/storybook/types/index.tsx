import { Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const TYPES = ['contained', 'outlined', 'ghosted'];

export const TypesStory: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Badge,
    componentProps: props,
});

TypesStory.storyName = 'Типы заливки';
TypesStory.parameters = createStoryDescription(description);
TypesStory.argTypes = excludeProp([
    'leftItemShown',
    'rightItemShown',
    'counterShown',
    'type',
]);
