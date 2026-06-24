import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import sizesDescription from './description.md?raw';

export const SizesStory: StoryFn<TextFieldProps> = (props) => DisplayVariants({
    property: 'size',
    values: ['small', 'medium', 'large'],
    component: TextField,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description: sizesDescription,
    excludeArgs: ['size', 'leftIconShown', 'rightIconShown'],
});
