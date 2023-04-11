import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import sizesDescription from './description.md';

export const SizesStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'size',
    values: ['small', 'medium', 'large'],
    component: TextField,
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size', 'leftIconShown', 'rightIconShown']);
SizesStory.parameters = createStoryDescription(sizesDescription);
