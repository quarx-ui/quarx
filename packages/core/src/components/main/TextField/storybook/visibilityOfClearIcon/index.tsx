import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import visibilityOfClearIconDescription from './description.md';

export const VisibilityOfClearIconStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'clearIconVisibleOn',
    values: ['interact', 'always', 'none'],
    component: TextField,
    componentProps: props,
});

setStoryParams(VisibilityOfClearIconStory, {
    title: 'Очистка поля',
    excludeArgs: ['clearIconVisibleOn', 'leftIconShown', 'rightIconShown'],
    description: visibilityOfClearIconDescription,
    args: {
        ...defaultTextFieldStoryArgs,
        defaultValue: 'Some text',
    },
});
