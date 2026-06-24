import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { Tabs, TabsProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TABS_TYPES } from '../../common';
import description from './description.md?raw';

export const TypesStory: StoryFn<TabsProps> = (props) => (
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
