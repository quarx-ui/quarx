import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import { Flex, StoryTextFieldProps } from '../utils';
import helperDescription from './description.md';

export const HelpersStory: Story<StoryTextFieldProps> = (props) => (
    <Flex>
        <TextField {...props} helperText="Helper Text" />
        <TextField {...props} helperText="Helper Text" counter />
        <TextField {...props} errorText="Error Text" />
    </Flex>
);

HelpersStory.storyName = 'Подсказки';
HelpersStory.parameters = createStoryDescription(helperDescription);
HelpersStory.argTypes = excludeProp([
    'helperText',
    'counter',
    'errorText',
    'maxLength',
    'leftIconShown',
    'rightIconShown',
]);
HelpersStory.args = {
    ...defaultTextFieldStoryArgs,
    defaultValue: 'Some text',
};
