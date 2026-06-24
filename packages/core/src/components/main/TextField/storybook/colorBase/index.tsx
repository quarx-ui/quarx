import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import colorBaseDescription from './description.md?raw';

export const ColorBaseStory: StoryFn<TextFieldProps> = (props) => DisplayVariants({
    property: 'colorBase',
    values: ['main', 'secondary'],
    component: TextField,
    componentProps: props,
});

setStoryParams(ColorBaseStory, {
    title: 'Цветовая основа',
    description: colorBaseDescription,
    excludeArgs: ['colorBase', 'leftIconShown', 'rightIconShown'],
});
