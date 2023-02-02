/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { QX_SIZE, Tabs } from '@core';
import { TabsProps } from '../../types';
import { TABS_TYPES } from '../../common';
import { iconItems } from '../utils';
import { defaultTabsStoryArgs } from '../args';

export const SandboxStory: Story<TabsProps> = ({
    line,
    icons,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSetValue,
    type,
    items: itemsProp,
    ...props
}) => {
    const [tab, setTab] = useState('medicine');

    return (
        <Tabs
            type="contained"
            line={type === TABS_TYPES.default ? line : undefined}
            icons={type === TABS_TYPES.segmented ? icons : undefined}
            items={type === TABS_TYPES.segmented && icons ? iconItems : itemsProp}
            value={tab}
            onSetValue={({ value }) => {
                setTab(value);
            }}
            {...props}
        />
    );
};

SandboxStory.storyName = 'Компонент';
SandboxStory.args = { ...defaultTabsStoryArgs, size: QX_SIZE.large };
