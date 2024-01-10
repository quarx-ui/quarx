import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import borderRadiusDescription from './description.md';

export const BorderRadiusStory: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    component: TextField,
    componentProps: props,
});

setStoryParams(BorderRadiusStory, {
    title: 'Скругления',
    description: borderRadiusDescription,
    excludeArgs: ['borderRadius', 'leftIconShown', 'rightIconShown'],
});
