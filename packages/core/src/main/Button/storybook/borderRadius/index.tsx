import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonBorderRadius, ButtonProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

const BORDER_RADIUS: ButtonBorderRadius[] = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'];

export const BorderRadiusStory: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: BORDER_RADIUS,
    component: Button,
    componentProps: props,
});

BorderRadiusStory.storyName = 'Скругления';
BorderRadiusStory.parameters = createStoryDescription(description);
BorderRadiusStory.argTypes = excludeProp([
    'leftIconShown',
    'rightIconShown',
    'borderRadius',
]);
