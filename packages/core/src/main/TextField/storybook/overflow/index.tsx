import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import overflowDescription from './description.md';

export const OverflowStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'overflow',
    values: [false, true],
    component: TextField,
    componentProps: props,
});

OverflowStory.storyName = 'Переполнение';
OverflowStory.parameters = createStoryDescription(overflowDescription);
OverflowStory.argTypes = excludeProp([
    'counter',
    'errorText',
    'maxLength',
    'leftIconShown',
    'rightIconShown',
]);
OverflowStory.args = {
    ...defaultTextFieldStoryArgs,
    maxLength: 10,
    counter: true,
};
