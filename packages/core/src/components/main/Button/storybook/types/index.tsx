import { Button, BUTTON_TYPE, ButtonProps } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

export const TypesStory: StoryFn<ButtonProps> = (props) => DisplayVariants({
    property: 'type',
    values: Object.values(BUTTON_TYPE),
    component: Button,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'type'],
});
