import { StoryFn } from '@storybook/react-vite';
import { Button, ButtonBorderRadius, ButtonProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const BORDER_RADIUS: ButtonBorderRadius[] = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'];

export const BorderRadiusStory: StoryFn<ButtonProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: BORDER_RADIUS,
    component: Button,
    componentProps: props,
});

setStoryParams(BorderRadiusStory, {
    title: 'Скругления',
    description,
    excludeArgs: [
        'leftIconShown',
        'rightIconShown',
        'borderRadius',
    ],
});
