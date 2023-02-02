import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { OVER_SCREEN_PLACEMENT } from '@core';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryOverScreenProps, commonDisplayProps } from '../utils';
import { OverScreen } from '../sandbox';
import marginDescription from './description.md';

export const MarginStory: Story<StoryOverScreenProps> = (props) => DisplayVariants({
    ...commonDisplayProps,
    component: OverScreen,
    property: 'margin',
    values: [0, '70, 10', 70],
    componentProps: (_, value) => ({
        ...props,
        placement: OVER_SCREEN_PLACEMENT['top-start'],
        buttonText: value,
    } as StoryOverScreenProps),
});

MarginStory.storyName = 'Отступы';
MarginStory.argTypes = excludeProp(['margin']);
MarginStory.parameters = createStoryDescription(marginDescription);
