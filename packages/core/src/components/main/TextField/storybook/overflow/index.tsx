import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import overflowDescription from './description.md?raw';

export const OverflowStory: StoryFn<TextFieldProps> = (props) => DisplayVariants({
    property: 'overflow',
    values: [false, true],
    component: TextField,
    componentProps: props,
});

setStoryParams(OverflowStory, {
    title: 'Переполнение',
    description: overflowDescription,
    excludeArgs: ['counter', 'errorText', 'maxLength', 'leftIconShown', 'rightIconShown'],
    args: {
        ...defaultTextFieldStoryArgs,
        maxLength: 10,
        counter: true,
    },
});
