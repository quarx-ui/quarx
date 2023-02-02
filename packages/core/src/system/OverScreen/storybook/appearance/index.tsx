import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { OVER_SCREEN_APPEARANCE } from '@core';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryOverScreenProps, commonDisplayProps } from '../utils';
import { OverScreen } from '../sandbox';
import appearanceDescription from './description.md';

export const AppearancesStory: Story<StoryOverScreenProps> = (props) => DisplayVariants({
    ...commonDisplayProps,
    component: OverScreen,
    property: 'appearance',
    values: Object.keys(OVER_SCREEN_APPEARANCE),
    componentProps: (_, value) => ({
        ...props,
        buttonText: value,
    } as StoryOverScreenProps),
});

AppearancesStory.storyName = 'Типы появления';
AppearancesStory.argTypes = excludeProp(['appearance']);
AppearancesStory.parameters = createStoryDescription(appearanceDescription);
