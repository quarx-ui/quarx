import { Story } from '@storybook/react/types-6-0';
import { DisplayBooleanVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import textAreaDescription from './description.md';

export const TextAreaStory: Story<TextFieldProps> = (props) => DisplayBooleanVariants({
    properties: ['multiline'],
    component: TextField,
    shownTitle: false,
    componentProps: props,
});

TextAreaStory.argTypes = excludeProp(['multiline', 'leftIconShown', 'rightIconShown']);
TextAreaStory.parameters = createStoryDescription(textAreaDescription);
TextAreaStory.args = {
    ...defaultTextFieldStoryArgs,
    clearIconVisibleOn: undefined,
};
