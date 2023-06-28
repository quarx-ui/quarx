import { Button, ButtonProps, ButtonType } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const TYPES: ButtonType[] = ['contained', 'outlined', 'text'];

export const TypesStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Button,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'type'],
});
