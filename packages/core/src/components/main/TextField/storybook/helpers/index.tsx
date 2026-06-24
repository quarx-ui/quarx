import { StoryFn } from '@storybook/react-vite';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import { Flex, StoryTextFieldProps } from '../utils';
import helperDescription from './description.md?raw';

export const HelpersStory: StoryFn<StoryTextFieldProps> = (props) => (
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
