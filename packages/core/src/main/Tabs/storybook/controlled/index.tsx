import { useState } from 'react';
import styled from '@emotion/styled';
import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Tabs } from '../..';
import { TabsProps } from '../../types';
import description from './description.md';

const DIV = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const ControlledStory: Story<TabsProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [selectedTab, setSelectedTab] = useState(props.items[0]);

    return (
        <DIV>
            {DisplayVariants({
                property: 'type',
                containerAlign: 'flex-start',
                values: ['default', 'contained', 'segmented'],
                component: Tabs,
                componentProps: {
                    ...props,
                    value: selectedTab.value,
                    onSetValue: setSelectedTab,
                    style: { marginBottom: 16 },
                },
            })}
        </DIV>
    );
};

ControlledStory.storyName = 'Внешнее управление';
ControlledStory.argTypes = excludeProp(['value', 'type']);
ControlledStory.parameters = createStoryDescription(description);
