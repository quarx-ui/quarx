import { Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const SIZES = ['small', 'medium', 'large'];

export const SizesStory: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Badge,
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.parameters = createStoryDescription(description);
SizesStory.argTypes = excludeProp([
    'leftItemShown',
    'rightItemShown',
    'counterShown',
    'size',
]);
