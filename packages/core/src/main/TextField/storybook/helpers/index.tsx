import { Story } from '@storybook/react/types-6-0';
import { setStoryParams } from '@core/storybook/setStoryParams';
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

setStoryParams(HelpersStory, {
    title: 'Подсказки',
    description: helperDescription,
    excludeArgs: ['helperText', 'counter', 'errorText', 'maxLength', 'leftIconShown', 'rightIconShown'],
    args: {
        ...defaultTextFieldStoryArgs,
        defaultValue: 'Some text',
    },
});
