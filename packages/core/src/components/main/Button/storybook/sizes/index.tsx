import { Button, ButtonProps, ButtonSize } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const SIZES: ButtonSize[] = ['xSmall', 'small', 'medium', 'large'];

export const SizesStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Button,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'size'],
});
