import { Button, BUTTON_TYPE, ButtonProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

export const TypesStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'type',
    values: Object.values(BUTTON_TYPE),
    component: Button,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'type'],
});
