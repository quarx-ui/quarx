import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import borderRadiusDescription from './description.md?raw';

export const BorderRadiusStory: StoryFn<TextFieldProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    component: TextField,
    componentProps: props,
});

setStoryParams(BorderRadiusStory, {
    title: 'Скругления',
    description: borderRadiusDescription,
    excludeArgs: ['borderRadius', 'leftIconShown', 'rightIconShown'],
});
