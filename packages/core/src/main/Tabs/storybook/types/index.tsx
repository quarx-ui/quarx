import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Tabs, TabsProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
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

setStoryParams(TypesStory, {
    title: 'Типы',
    description,
    excludeArgs: ['type'],
});
