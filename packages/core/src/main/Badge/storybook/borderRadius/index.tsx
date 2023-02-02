import { Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const BORDER_RADIUS = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'];

export const BorderRadiusStory: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: BORDER_RADIUS,
    component: Badge,
    componentProps: props,
});

BorderRadiusStory.storyName = 'Скругления';
BorderRadiusStory.parameters = createStoryDescription(description);
BorderRadiusStory.argTypes = excludeProp([
    'leftItemShown',
    'rightItemShown',
    'counterShown',
    'borderRadius',
]);
