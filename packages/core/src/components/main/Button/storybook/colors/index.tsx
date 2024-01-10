import { Button, ButtonColor, ButtonProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const COLOR: ButtonColor[] = ['brand', 'secondary', 'success', 'info', 'warning', 'danger'];

export const ColorsStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLOR,
    component: Button,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'color'],
});
