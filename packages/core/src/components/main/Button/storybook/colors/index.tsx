import { Button, ButtonColor, ButtonProps } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const COLOR: ButtonColor[] = ['brand', 'secondary', 'success', 'info', 'warning', 'danger'];

export const ColorsStory: StoryFn<ButtonProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLOR,
    component: Button,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'color'],
});
