/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { Tabs } from '../../Tabs';
import { TabsProps } from '../../types';
import { TABS_TYPES } from '../../common';
import { TABS_LINES } from '../../TabsDefault/constants';
import description from './description.md';

export const LinesStory: Story<TabsProps> = (props) => DisplayVariants({
    property: 'line',
    values: Object.values(TABS_LINES),
    component: Tabs,
    componentProps: { ...props, type: TABS_TYPES.default },
    direction: 'vertical',
});

setStoryParams(LinesStory, {
    title: 'Положение индикатора',
    description,
    excludeArgs: ['line', 'type'],
});
