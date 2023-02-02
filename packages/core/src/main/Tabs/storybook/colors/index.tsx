import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { PALETTE_COLORS, TabsProps, Tabs } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
import { Title } from '../utils';
import { TABS_TYPES } from '../../common';
import description from './description.md';

export const ColorsStory: Story<TabsProps> = (props) => (
    <div>
        {Object.values(PALETTE_COLORS).map((value) => (
            <div>
                <Title>{value}</Title>
                {DisplayVariants({
                    title: { isShown: false },
                    property: 'type',
                    values: [TABS_TYPES.default, TABS_TYPES.contained],
                    component: Tabs,
                    componentProps: { ...props, color: value },
                    direction: 'vertical',
                })}
            </div>
        ))}
    </div>
);

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color', 'type']);
ColorsStory.parameters = createStoryDescription(description);
