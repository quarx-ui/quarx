import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { TextField } from '../..';
import colorBaseDescription from './description.md';

export const ColorBaseStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'colorBase',
    values: ['main', 'secondary'],
    component: TextField,
    componentProps: props,
});

setStoryParams(ColorBaseStory, {
    title: 'Цветовая основа',
    description: colorBaseDescription,
    excludeArgs: ['colorBase', 'leftIconShown', 'rightIconShown'],
});
