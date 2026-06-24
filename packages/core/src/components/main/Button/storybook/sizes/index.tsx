import { Button, ButtonProps, ButtonSize } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const SIZES: ButtonSize[] = ['xSmall', 'small', 'medium', 'large'];

export const SizesStory: StoryFn<ButtonProps> = (props) => DisplayVariants({
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
