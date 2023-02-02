import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { QX_BORDER_SIZE, Tabs, TabsProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { createStoryDescription } from '@core/storybook/utils';
import { Title } from '../utils';
import { TABS_TYPES } from '../../common';
import description from './description.md';

export const RadiiStory: Story<TabsProps> = (props) => (
    <div>
        {Object.values(QX_BORDER_SIZE).map((value) => (
            <div>
                <Title>{value}</Title>
                {DisplayVariants({
                    title: { isShown: false },
                    property: 'type',
                    values: [TABS_TYPES.contained, TABS_TYPES.segmented],
                    component: Tabs,
                    componentProps: { ...props, borderRadius: value },
                    direction: 'vertical',
                })}
            </div>
        ))}
    </div>
);

RadiiStory.storyName = 'Скругления';
RadiiStory.argTypes = excludeProp(['borderRadius', 'type']);
RadiiStory.parameters = createStoryDescription(description);