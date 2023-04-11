import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import colorBaseDescription from './description.md';

export const ColorBaseStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'colorBase',
    values: ['main', 'secondary'],
    component: TextField,
    componentProps: props,
});

ColorBaseStory.storyName = 'Цветовая основа';
ColorBaseStory.argTypes = excludeProp(['colorBase', 'leftIconShown', 'rightIconShown']);
ColorBaseStory.parameters = createStoryDescription(colorBaseDescription);
