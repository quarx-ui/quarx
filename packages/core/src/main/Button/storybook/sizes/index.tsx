import { Button, ButtonProps, ButtonSize } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const SIZES: ButtonSize[] = ['xSmall', 'small', 'medium', 'large'];

export const SizesStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Button,
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.parameters = createStoryDescription(description);
SizesStory.argTypes = excludeProp([
    'leftIconShown',
    'rightIconShown',
    'size',
]);
