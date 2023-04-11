import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Tabs, TabsProps } from '@core';
import { TABS_TYPES } from '../../common';
import description from './description.md';

export const TypesStory: Story<TabsProps> = (props) => (
    DisplayVariants({
        property: 'type',
        values: Object.values(TABS_TYPES),
        component: Tabs,
        componentProps: props,
        direction: 'vertical',
    })
);

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
TypesStory.parameters = createStoryDescription(description);
