/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { createStoryDescription } from '@core/storybook/utils';
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

LinesStory.storyName = 'Положение индикатора';
LinesStory.argTypes = excludeProp(['line', 'type']);
LinesStory.parameters = createStoryDescription(description);
