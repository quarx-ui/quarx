import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '@core';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

export const BooleanPropsStory: Story<ButtonProps> = (props) => (DisplayVariantsMap({
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
