import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Meta } from '@storybook/react';
import { TabsProps } from '@core';
import { Tabs } from '../Tabs';
import { defaultTabsStoryArgs } from './args';

export default {
    title: STORY_PATHS.core.components.main('Tabs'),
    component: Tabs,
    args: defaultTabsStoryArgs,
    argTypes: {
        ...defineCategory('Основное', {
            type: {},
            value: {},
            items: {},
            defaultValue: {},
            onSetValue: {},
        }),
        ...defineCategory('Стилизация', {
            color: {},
            size: {},
            borderRadius: {},
            line: {},
            icons: {},
        }),
        ...excludeProp(['hidden', 'permissions'], BASE_ARG_TYPES),
        ...defineCategory('Кастомизация', {
            className: {},
            classes: {},
            styles: {},
            scrollOptions: {},
        }),
    },
} as Meta<TabsProps>;

export { SandboxStory } from './sandbox';
export { TypesStory } from './types';
export { ColorsStory } from './colors';
export { ControlledStory } from './controlled';
export { CounterStory } from './counter';
export { CustomComponentStory } from './customComponent';
export { IconsStory } from './icons';
export { LinesStory } from './lines';
export { RadiiStory } from './radii';
export { SizesStory } from './sizes';
