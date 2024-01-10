import { Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const TYPES = ['contained', 'outlined', 'ghosted'];

export const TypesStory: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Badge,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы заливки',
    description,
    excludeArgs: ['leftItemShown', 'rightItemShown', 'counterShown', 'type'],
});
