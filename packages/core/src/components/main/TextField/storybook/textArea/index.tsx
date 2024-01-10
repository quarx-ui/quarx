import { Story } from '@storybook/react/types-6-0';
import { DisplayBooleanVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import textAreaDescription from './description.md';

export const TextAreaStory: Story<TextFieldProps> = (props) => DisplayBooleanVariants({
    properties: ['multiline'],
    component: TextField,
    shownTitle: false,
    componentProps: props,
});

setStoryParams(TextAreaStory, {
    title: 'TextArea',
    description: textAreaDescription,
    excludeArgs: ['multiline', 'leftIconShown', 'rightIconShown'],
    args: {
        ...defaultTextFieldStoryArgs,
        clearIconVisibleOn: undefined,
    },
});
