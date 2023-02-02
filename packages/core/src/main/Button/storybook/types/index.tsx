import { Button, ButtonProps, ButtonType } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const TYPES: ButtonType[] = ['contained', 'outlined', 'text'];

export const TypesStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Button,
    componentProps: props,
});

TypesStory.storyName = 'Типы';
TypesStory.parameters = createStoryDescription(description);
TypesStory.argTypes = excludeProp([
    'leftIconShown',
    'rightIconShown',
    'type',
]);
