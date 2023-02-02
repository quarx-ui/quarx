/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { Tabs } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
import { TabsProps } from '../../types';
import { TABS_TYPES } from '../../common';
import { iconItems } from '../utils';
import description from './description.md';

export const IconsStory: Story<TabsProps> = (props) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs
            {...props}
            icons
            type={TABS_TYPES.segmented}
            items={iconItems}
        />
    </div>
);

IconsStory.storyName = 'Использование иконок';
IconsStory.argTypes = excludeProp(['icons']);
IconsStory.parameters = createStoryDescription(description);
