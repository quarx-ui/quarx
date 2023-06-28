import { Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const BORDER_RADIUS = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'];

export const BorderRadiusStory: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: BORDER_RADIUS,
    component: Badge,
    componentProps: props,
});

setStoryParams(BorderRadiusStory, {
    title: 'Скругления',
    description,
    excludeArgs: ['leftItemShown', 'rightItemShown', 'counterShown', 'borderRadius'],
});
