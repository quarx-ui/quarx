import { Button, ButtonColor, ButtonProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const COLOR: ButtonColor[] = ['brand', 'secondary', 'success', 'info', 'warning', 'danger'];

export const ColorsStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLOR,
    component: Button,
    componentProps: props,
});

ColorsStory.storyName = 'Цвета';
ColorsStory.parameters = createStoryDescription(description);
ColorsStory.argTypes = excludeProp([
    'leftIconShown',
    'rightIconShown',
    'color',
]);
