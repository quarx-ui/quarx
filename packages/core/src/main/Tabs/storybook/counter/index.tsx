/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { createStoryDescription } from '@core/storybook/utils';
import { Tabs } from '@core';
import { TabsProps } from '../../types';
import { TABS_TYPES } from '../../common';
import description from './description.md';

export const CounterStory: Story<TabsProps> = ({ items: tabItems, ...props }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {DisplayVariants({
            property: 'type',
            containerAlign: 'flex-start',
            values: ['default', 'contained', 'segmented'],
            component: Tabs,
            componentProps: {
                ...props,
                type: TABS_TYPES.default,
                style: { marginBottom: 16 },
                items: [
                    tabItems[0],
                    {
                        value: 'notifications',
                        label: 'Уведомления',
                        counter: 12,
                    },
                ],
            },
        })}
    </div>
);

CounterStory.storyName = 'Счетчик во вкладке';
CounterStory.argTypes = excludeProp(['type']);
CounterStory.parameters = createStoryDescription(description);
