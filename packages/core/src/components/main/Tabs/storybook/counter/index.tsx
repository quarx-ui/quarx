/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { Tabs } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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

setStoryParams(CounterStory, {
    title: 'Счетчик во вкладке',
    description,
    excludeArgs: ['type'],
});
