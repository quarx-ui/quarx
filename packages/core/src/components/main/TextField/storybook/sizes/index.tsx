import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import sizesDescription from './description.md';

export const SizesStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'size',
    values: ['small', 'medium', 'large'],
    component: TextField,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description: sizesDescription,
    excludeArgs: ['size', 'leftIconShown', 'rightIconShown'],
});
