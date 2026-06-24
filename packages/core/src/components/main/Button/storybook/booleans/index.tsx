import { StoryFn } from '@storybook/react-vite';
import { Button, ButtonProps } from '@core';
import { DisplayVariantsMap } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

export const BooleanPropsStory: StoryFn<ButtonProps> = (props) => (DisplayVariantsMap({
    variants: {
        loading: [true],
        disabled: [true],
    },
    optionTitle: { isShown: false },
    direction: 'vertical',
    component: Button,
    componentProps: props,
}));

setStoryParams(BooleanPropsStory, {
    title: 'Boolean параметры',
    description,
    excludeArgs: ['leftIconShown', 'rightIconShown', 'disabled', 'loading'],
});
