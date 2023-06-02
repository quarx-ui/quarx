import { useState } from 'react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
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

setStoryParams(ControlledStory, {
    title: 'Внешнее управление',
    description,
    excludeArgs: ['value', 'type'],
});
