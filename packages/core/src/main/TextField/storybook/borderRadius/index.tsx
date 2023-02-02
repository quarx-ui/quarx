import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import borderRadiusDescription from './description.md';

export const BorderRadiusStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    component: TextField,
    componentProps: props,
});

BorderRadiusStory.storyName = 'Скругления';
BorderRadiusStory.argTypes = excludeProp(['borderRadius', 'leftIconShown', 'rightIconShown']);
BorderRadiusStory.parameters = createStoryDescription(borderRadiusDescription);
