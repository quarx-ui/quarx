import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '@core';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
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

BooleanPropsStory.storyName = 'Boolean параметры';
BooleanPropsStory.parameters = createStoryDescription(description);
BooleanPropsStory.argTypes = excludeProp([
    'leftIconShown',
    'rightIconShown',
    'disabled',
    'loading',
]);
