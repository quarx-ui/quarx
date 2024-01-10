import { Story } from '@storybook/react/types-6-0';
import { Badge, BadgeProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const SIZES = ['small', 'medium', 'large'];

export const SizesStory: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Badge,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['leftItemShown', 'rightItemShown', 'counterShown', 'size'],
});
