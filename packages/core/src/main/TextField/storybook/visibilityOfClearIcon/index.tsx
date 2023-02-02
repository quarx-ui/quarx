import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import visibilityOfClearIconDescription from './description.md';

export const VisibilityOfClearIconStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'clearIconVisibleOn',
    values: ['interact', 'always', 'none'],
    component: TextField,
    componentProps: props,
});

VisibilityOfClearIconStory.storyName = 'Очистка поля';
VisibilityOfClearIconStory.argTypes = excludeProp(['clearIconVisibleOn', 'leftIconShown', 'rightIconShown']);
VisibilityOfClearIconStory.parameters = createStoryDescription(visibilityOfClearIconDescription);
VisibilityOfClearIconStory.args = {
    ...defaultTextFieldStoryArgs,
    defaultValue: 'Some text',
};
