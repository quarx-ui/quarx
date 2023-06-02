import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { OVER_SCREEN_APPEARANCE } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
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

setStoryParams(AppearancesStory, {
    title: 'Типы появления',
    description: appearanceDescription,
    excludeArgs: ['appearance'],
});
